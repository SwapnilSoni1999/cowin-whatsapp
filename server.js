const lt = require('localtunnel')

const app = require('./app')
const WhatsApp = require('./lib/whatsapp')
const logger = require('./utils/logger')

const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
    logger.info(`Server started on port ${PORT}`)
    const tunnel = await lt({ port: PORT, subdomain: process.env.LT_SUBDOMAIN })
    logger.info(`Localtunnel Started: ${tunnel.url}`)
    exports.whatsapp = new WhatsApp(process.env.NODE_ENV === 'development' ? process.env.API_KEY_TESTING : process.env.API_KEY_AWS)
})
