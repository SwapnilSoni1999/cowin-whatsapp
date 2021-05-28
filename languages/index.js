const en = require('./en')

const LANG = { 
    en
}

/**
 * Choose language
 * @param {'en'} lang 
 */
const language = (lang) => {
    return LANG[lang]
}

module.exports = language
