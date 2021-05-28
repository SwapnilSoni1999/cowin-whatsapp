const path = require('path')
const WhatsApp = require('./lib/whatsapp')

const whatsapp = new WhatsApp(process.env.NODE_ENV === 'development' ? process.env.API_KEY_TESTING : process.env.API_KEY_AWS)

module.exports = {
    dirs: {
        assets: path.resolve('assets'),
        certificate: path.resolve('assets', 'certificates')
    },
    whatsapp
}