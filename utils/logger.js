const { createLogger, transports, format } = require('winston')
const package = require('../package.json')

const logger = createLogger({
    transports: [
        new transports.File({
            filename: `${package.name}-${package.version}-info.log`,
            level: 'info',
            format: format.combine(format.timestamp(), format.json(), format.colorize(), format.cli())
        }),
        new transports.File({
            filename: `${package.name}-${package.version}-error.log`,
            level: 'error',
            format: format.combine(format.timestamp(), format.json(), format.colorize(), format.cli())
        }),
        new transports.File({
            filename: `${package.name}-${package.version}-log.log`,
            level: 'log',
            format:format.combine(format.timestamp(), format.json(), format.colorize(), format.cli())
        }),
        new transports.Console({ format: format.combine(format.timestamp(), format.json(), format.colorize(), format.cli()) })
    ]
})

module.exports = logger
