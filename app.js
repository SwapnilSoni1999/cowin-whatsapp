require('dotenv').config()
const express = require('express')
const logger = require('./utils/logger')
const webhookRoute = require('./routes/webhook.route')

logger.info(`NODE_ENV: ${process.env.NODE_ENV}`)

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/webhook', webhookRoute)

module.exports = app
