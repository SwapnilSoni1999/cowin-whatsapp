const User = require('../models/user')

exports.getStep = async (number) => {
    const { state } = await User.findOne({ number }).select('state')
    return state.step
}

exports.setStep = async (number, step) => {
    await User.updateOne({ number }, { $set: { 'state.step': step } })
    return
}

exports.hasTxnId = async (number) => {
    const { txnId } = await User.findOne({ number }).select('txnId')
    return txnId
}

exports.setState = async (number, status) => {
    await User.updateOne({ number }, { $set: { state: status } })
    return
}
