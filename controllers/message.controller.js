const lang = require('../languages')
const wa = require('../lib/whatsapp')
const User = require('../models/user')
const session = require('../lib/session')
const { userStates } = require('../flows')
const Flow = require('./flow.controller')

class WhatsApp {
    static async handleMessage (number, message) {
        const user = await User.findOne({ number })
        if (!user) {
            await User.create({ number })
            Object.assign(user, { lang: 'en', number })
        }
        const { lang: userLang } = user
        
        // is an introduction message
        if(lang(userLang).initiate_conversation_message.includes(message.toLowerCase())) {
            await wa.sendTextMessage(number, lang(userLang).introductionMessageForthebot)
            await wa.sendTextMessage(number, lang(userLang).howMayIHelpYou)
            return await session.setState(number, userStates.intro)
        }

        return await Flow.enter(number, userLang, user.state, message)
    }
}

module.exports = WhatsApp
