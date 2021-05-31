const moment = require('moment')

const isFuture = (date) => {
    const dateObj = moment(date, 'DD-MM-yyyy', true)
    if (!dateObj.isValid()) {
        throw new Error('Invalid date.')
    }
    const yesterday = dateObj.subtract(1, 'days')
    return (parseInt(dateObj.valueOf() / 1000)) > parseInt(moment.now() / 1000) || dateObj.isAfter(yesterday)
}

module.exports = isFuture