const express = require('express')
const {toLogin} = require('../controllers/auth.controller.js')

const router = express.Router()



router.post('/login', toLogin)


module.exports = router