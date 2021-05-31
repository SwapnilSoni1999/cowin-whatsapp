const moment = require('moment')

const isFuture = (date) => {
    const dateObj = moment(date, 'dd-mm-yyy', true)
    if (!dateObj.isValid()) {
        throw new Error('Invalid date.')
    }
    return (parseInt(dateObj.valueOf() / 1000)) > parseInt(moment.now() / 1000)
}

module.exports = isFuture