const { Router } = require('express')
const WebHook = require('../controllers/webhook.controller')

const router = Router()

router.use('/', WebHook.handle)

module.exports = router
