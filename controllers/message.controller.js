const lang = require('../languages')
const wa = require('../lib/whatsapp')
const User = require('../models/user')

class WhatsApp {
    static async handleMessage (number, message) {
        const user = await User.findOne({ number })
        if (!user) {
            await User.create({ number })
            Object.assign(user, { lang: 'en', number })
        }
        const { lang: userLang } = user
        
        if(lang(userLang).initiate_conversation_message.includes(message)) {
            await Promise.all([
                wa.sendTextMessage(number, lang(userLang).introductionMessageForthebot),
                wa.sendTextMessage(number, lang(userLang).howMayIHelpYou)
            ])
        }

    }
}

module.exports = WhatsApp
