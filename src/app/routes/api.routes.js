'use strict'

const path = require('path')
const express = require('express')
const router = express.Router()

const WalletController = require('../controllers/WalletController')
router.route('/send').post(WalletController.send)
router.route('/receive').get(WalletController.receive)

module.exports = router