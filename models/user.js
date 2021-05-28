const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    number: { type: Number, unique: true, required: true },
    state: { type: Object, default: {} },
    txnId: { type: String, default: null },
    token: { type: String, default: null },
    lang: { type: String, default: 'en' }
})

const User = model('User', UserSchema, 'users')

module.exports = User
