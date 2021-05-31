const moment = require('moment-timezone')

const isFuture = (date) => {
    const dateObj = moment(date, 'DD-MM-yyyy', true).tz('Asia/Kolkata')
    if (!dateObj.isValid()) {
        throw new Error('Invalid date.')
    }
    if (moment().format('DD-MM-yyyy') === date) {
        return true
    }
    return (parseInt(dateObj.valueOf() / 1000)) > parseInt(moment.now() / 1000)
}

module.exports = isFuture