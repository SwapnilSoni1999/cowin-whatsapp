const session = require('../lib/session')
const { userStates, userSteps } = require('../flows')
const wa = require('../lib/whatsapp')
const lang = require('../languages')
const cowin = require('../cowin-wrapper')
const fs = require('fs')
const path = require('path')
const { dirs } = require('../config')

const USE_API = 'demo'

const methods = new Map()
// init flow
methods.set(userStates.intro, this.introHandler)
methods.set(userStates.downloadCertificate, this.downloadCertificate)

class Flow {
    async static enter(number, userLang, state, message=null) {
        const methods = new Map()

        const scene = methods.get(state)
        const step = await session.getStep(number)
        return await scene(number, userLang, step, message)
    }

    static async introHandler(number, userLang, step, message) {
        switch (message) {
            case userSteps.intro.scheduleAppointment: {
                return await Promise.race([
                    session.setState(number, userStates.scheduleAppointment)
                ])
            }

            case userSteps.intro.downloadCertificate: {
                const txnId = await cowin.sendOtp(number.slice(2), USE_API)
                
                return await Promise.race([
                    wa.sendTextMessage(number, lang(userLang).otpMessageForCertificate),
                    session.setState(number, userStates.downloadCertificate),
                    session.setTxnId(number, txnId),
                    session.setStep(number, userSteps.downloadCertificate.verifyOtp)
                ])
            }

            default: {
                return await wa.sendTextMessage(number, lang(userLang).default_error_message)
            }
        }
    }

    static async scheduleAppointment(number, userLang, step, message) {
        
    }

    static async downloadCertificate(number, userLang, step, message) {
        switch (step) {

            case userSteps.downloadCertificate.verifyOtp: {
                try {
                    const token = await cowin.verifyOtp(await session.getTxnId(number), message, USE_API)
                    const beneficiaries = await cowin.getBeneficiaries(token, USE_API)
                    const txt = [
                        lang(userLang).beneficiaryMessageSubPart1,
                        beneficiaries.map((b, c) => `${++c}. ${b.name}`).join('\n')
                    ].join('\n')
                    return await Promise.race([
                        wa.sendTextMessage(number, txt),
                        session.setToken(number, token),
                        session.setBeneficiaries(number, beneficiaries),
                        session.setStep(number, userSteps.downloadCertificate.chooseBenef)
                    ])
                } catch (err) {
                    return await wa.sendTextMessage(number, lang(userLang).invalidOTP)
                }
            }

            case userSteps.downloadCertificate.chooseBenef: {
                const beneficiaries = await session.getBeneficiaries(number)
                const benef = beneficiaries[parseInt(message) - 1]

                if (!benef.dose1_date || !benef.dose2_date) {
                    return await Promise.race([
                        wa.sendTextMessage(number, lang(userLang).noCertificateDownload),
                        session.setState(number, null),
                        session.setStep(number, userStates.intro)
                    ])
                }

                const pdfBuf = await cowin.downloadCertificatae(await session.getToken(number), benef.beneficiary_reference_id, USE_API)
                const filePath = path.join(dirs.certificate, `certificate_${number.slice(2)}.pdf`)
                fs.writeFileSync(filePath, pdfBuf, { encoding: 'binary' })
                const fileId = await wa.uploadPdf(filePath)
                return await Promise.race([
                    wa.sendMediaFile(number, fileId, filePath),
                    session.setStep(number, null),
                    session.setState(number, userStates.intro)
                ])
            }

            default: {
                return await wa.sendTextMessage(number, lang(userLang).default_error_message)
            }
        }
    }
}

module.exports = Flow
