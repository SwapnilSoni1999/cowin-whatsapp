const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    number: { type: Number, unique: true, required: true },
    step: { type: Number, default: null },
    txnId: { type: String, default: null },
    token: { type: String, default: null },
    lang: { type: String, default: 'en' },
    state: { type: String, default: null }
})

const User = model('User', UserSchema, 'users')

module.exports = User
