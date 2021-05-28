const panCard = (number) => {
    const panReg = /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/
    return panReg.test(number)
}

module.exports = panCard
