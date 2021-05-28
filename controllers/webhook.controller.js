const Whatsapp = require('../lib/whatsapp')

class WebHook {
    static async handle(req, res) {
        if (!req.body.messages.length) {
            return res.end() 
        }
        const messages = req.body.messages
        for (const message of messages) {
            const waId = message.from
            const message = message.text.body || message.button.text
            if (!message) {
                return res.end()
            }
            Whatsapp.handleMessage(waId, message)
            return res.end()
        }
    }
}

module.exports = WebHook
