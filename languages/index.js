const en = require('./en')
const hi = require('./hi')
const kan = require('./kan')

const LANG = { 
    en,
    hi,
    kan
}

/**
 * Choose language
 * @param {'en'|'hi'|'kan'} lang 
 */
const language = (lang) => {
    return LANG[lang]
}

module.exports = language
