const Whatsapp = require('../lib/whatsapp')

class WebHook {
    static async handle(req, res) {
        if (!req.body.messages.length) {
            return res.end() 
        }
        const messages = req.body.messages
        for (const message of messages) {
            const waId = message.from
            const msg = message.text.body || message.button.text
            if (!msg) {
                return res.end()
            }
            Whatsapp.handleMessage(waId, msg)
            return res.end()
        }
    }
}

module.exports = WebHook
