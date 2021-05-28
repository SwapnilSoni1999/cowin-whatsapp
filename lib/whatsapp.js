const { default: axios } = require('axios')
const logger = require('../utils/logger')

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
}

module.exports = WhatsAppClient
