const User = require('../models/user')

exports.getStep = async (number) => {
    const { step } = await User.findOne({ number }).select('step')
    return step
}

exports.setStep = async (number, step) => {
    return await User.updateOne({ number }, { $set: { 'state.step': step } })
}

exports.getTxnId = async (number) => {
    const { txnId } = await User.findOne({ number }).select('txnId')
    return txnId
}

exports.setTxnId = async (number, txnId) => {
    return await User.updateOne({ number }, { $set: { txnId } })
}

exports.setState = async (number, status) => {
    return await User.updateOne({ number }, { $set: { state: status } })
}

exports.getState = async (number) => {
    const { state } = await User.findOne({ number }).select('state')
    return state
}

exports.getToken = async (number) => {
    const { token } = await User.findOne({ number }).select('token')
    return token
}

exports.setToken = async (number, token) => {
    return await User.updateOne({ number }, { $set: { token } })
}

exports.setBeneficiaries = async (number, beneficiaries) => {
    return await User.updateOne({ number }, { $set: { beneficiaries } })
}

exports.getBeneficiaries = async (number) => {
    const { beneficiaries } = await User.findOne({ number }).select('beneficiaries')
    return beneficiaries
}
