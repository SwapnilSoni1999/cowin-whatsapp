const aadharValidator = require('aadhaar-validator')

exports.aadhar = (aadhar) => {
    if (isNaN(aadhar)) {
        return false
    }

    if (aadhar.length != 12) {
        return false
    }

    return aadharValidator.isValidNumber(aadhar)
}