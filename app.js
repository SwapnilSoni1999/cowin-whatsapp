require('dotenv')
const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => res.json({ message: "Done!"}))

app.listen(PORT)
