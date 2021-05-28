const { app, initWhatsapp } = require('./app')
const PORT = process.env.PORT || 8080

app.listen(PORT, async () => {
    await initWhatsapp(PORT)
})
