const { default: axios } = require('axios')
const logger = require('../utils/logger')
const path = require('path')

class WhatsApp {
    constructor (apiKey, tunnelUrl) {
        const dialog = axios.create({
            baseURL: process.env.WABA_HOST,
            headers: {
                'D360-API-KEY': apiKey
            }
        })
        this.dialog = dialog
        dialog({
            method: 'POST',
            url: '/v1/configs/webhook',
            data: {
                url: path.join(tunnelUrl, '/webhook')
            }
        })
        logger.info('D360 Webhook url set!')
    }

    async handleMessage(number, message) {
        console.log(number, message)
    }

}

module.exports = WhatsApp
