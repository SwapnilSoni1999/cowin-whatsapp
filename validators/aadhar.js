const aadharValidator = require('aadhaar-validator')

const aadhar = (aadhar) => {
    if (process.env.NODE_ENV === 'development') {
        return true
    }

    if (isNaN(aadhar)) {
        return false
    }

    if (aadhar.length != 12) {
        return false
    }

    return aadharValidator.isValidNumber(aadhar)
}

module.exports = aadhar
