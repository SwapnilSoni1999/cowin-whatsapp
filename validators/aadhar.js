const aadharValidator = require('aadhaar-validator')

const aadhar = (aadhar) => {
    if (isNaN(aadhar)) {
        return false
    }

    if (aadhar.length != 12) {
        return false
    }

    return aadharValidator.isValidNumber(aadhar)
}

module.exports = aadhar
