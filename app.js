require('dotenv').config()
const lt = require('localtunnel')
const express = require('express')
const logger = require('./utils/logger')
logger.info(`NODE_ENV: ${process.env.NODE_ENV}`)

const PORT = process.env.PORT || 8080

const app = express()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (_, res) => res.json({ message: "Done!"}))

if (process.env.NODE_ENV === 'development') {
    lt({ port: 3000, subdomain: process.env.LT_SUBDOMAIN }, (err, tunnel) => logger.info(`Localtunnel Started: ${tunnel.url}`))
}
app.listen(PORT, logger.info(`Server started on port ${PORT}`))
