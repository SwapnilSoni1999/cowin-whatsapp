const app = require('./app')
const logger = require('./utils/logger')
const PORT = process.env.PORT || 8080
const lt = require('localtunnel')
const whatsapp = require('./lib/whatsapp')

app.listen(PORT, async () => {
    logger.info(`Server started on port ${PORT}`)
    const tunnel = await lt({ port: PORT, subdomain: process.env.LT_SUBDOMAIN })
    logger.info(`Localtunnel Started: ${tunnel.url}`)
    await whatsapp.setWebHook(tunnel.url)
})
