const { Router } = require('express')
const WebHook = require('../controllers/webhook.controller')

const router = Router()

router.route('/webhook').post(WebHook.handle)

module.exports = router
