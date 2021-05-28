require('dotenv').config()
const express = require('express')
const logger = require('./utils/logger')

logger.info(`NODE_ENV: ${process.env.NODE_ENV}`)

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (_, res) => res.json({ message: "Done!"}))
app.post('/', require('./routes/webhook.route'))

module.exports = app
