const en = require('./en')

const LANG = { 
    en
}

/**
 * Choose language
 * @param {'en'} lang 
 */
const language = (lang) => {
    LANG[lang]
}

module.exports = language
