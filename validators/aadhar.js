const aadharValidator = require('aadhaar-validator')

const aadhar = (aadhar) => {
    if (process.env.NODE_ENV === 'development') {
        return true
    }
    return aadharValidator.isValidNumber(aadhar)
}

module.exports = aadhar
