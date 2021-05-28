const app = require('./app')
const logger = require('./utils/logger')
const PORT = process.env.PORT || 8080
const lt = require('localtunnel')
const WhatsAppClient = require('./lib/whatsapp')
const mongoose = require('mongoose')

app.listen(PORT, async () => {
    logger.info(`Server started on port ${PORT}`)
    const tunnel = await lt({ port: PORT, subdomain: process.env.LT_SUBDOMAIN })
    logger.info(`Localtunnel Started: ${tunnel.url}`)
    await WhatsAppClient.setWebHook(tunnel.url)
    try {
        await mongoose.connect(`mongodb://localhost:27017/${process.env.NODE_ENV === 'development' ? 'Cowin-dev' : 'Cowin'}`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        logger.info('Established connection to database!')
    } catch (err) {
        logger.error('Unable to establish connection to database!')
    }
})
