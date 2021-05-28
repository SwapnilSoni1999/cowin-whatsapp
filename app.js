require('dotenv').config()
const express = require('express')
const lt = require('localtunnel')
const logger = require('./utils/logger')
const WhatsApp = require('./lib/whatsapp')

logger.info(`NODE_ENV: ${process.env.NODE_ENV}`)

const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (_, res) => res.json({ message: "Done!"}))
app.post('/', require('./routes/webhook.route'))

async function initWhatsapp(PORT) {
    logger.info(`Server started on port ${PORT}`)
    const tunnel = await lt({ port: PORT, subdomain: process.env.LT_SUBDOMAIN })
    logger.info(`Localtunnel Started: ${tunnel.url}`)
    exports.whatsapp = new WhatsApp(process.env.NODE_ENV === 'development' ? process.env.API_KEY_TESTING : process.env.API_KEY_AWS, tunnel.url)
}

module.exports = { app, initWhatsapp }
