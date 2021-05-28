const whatsapp = require('./message.controller')

class WebHook {
    static async handle(req, res) {
        console.log(req.body)
        if (!req.body.messages?.length) {
            return res.status(200).end() 
        }
        const messages = req.body.messages
        for (const message of messages) {
            const waId = message.from
            const msg = message.text.body || message.button.text
            if (!msg) {
                return res.status(200).end()
            }
            whatsapp.handleMessage(waId, msg.toString().trim())
            return res.status(200).end()
        }
    }
}

module.exports = WebHook
