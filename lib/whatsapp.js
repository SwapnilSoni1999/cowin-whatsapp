const { default: axios } = require('axios')
const logger = require('../utils/logger')
const fs = require('fs')

const dialog = axios.create({
    baseURL: process.env.WABA_HOST,
    headers: {
        'D360-API-KEY': process.env.NODE_ENV === 'development' ? process.env.API_KEY_TESTING : process.env.API_KEY_AWS
    }
})

class WhatsAppClient {
    static async setWebHook(tunnelUrl) {
        await dialog({
            method: 'POST',
            url: '/v1/configs/webhook',
            data: {
                url: tunnelUrl +'/webhook'
            }
        })
        logger.info('D360 Webhook url set!')
    }

    static async sendTextMessage(number, message) {
        const res = await dialog({
            method: 'POST',
            url: '/v1/messages',
            data: {
                recipient_type: 'individual',
                to: number,
                type: 'text',
                text: {
                    body: message
                }
            }
        })
        return res.data
    }

    static async uploadPdf (filePath) {
        const res = await dialog({
            method: 'POST',
            url: '/v1/media',
            headers: {
                'content-type': 'application/pdf'
            },
            data: fs.createReadStream(filePath)
        })
        return res.data.media[0].id
    }

    static async sendMediaFile (number, fileId, filePath) {
        const res = await dialog({
            method: 'POST',
            url: '/v1/messages',
            data: {
                recipient_type: 'individual',
                to: number,
                type: 'document',
                document: {
                    id: fileId,
                    filename: 'certificate.pdf'
                }
            }
        })
        fs.unlinkSync(filePath)
        return res.data
    }
}

module.exports = WhatsAppClient
