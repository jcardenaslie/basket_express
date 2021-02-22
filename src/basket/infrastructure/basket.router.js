const express = require('express')
const router = express.Router()
const controller = require('./basket.controller')

router.get('/', controller.getAll)

router.post('/', controller.create)

router.put('/', controller.update)

router.delete('/', controller.remove)

router.post('/:id/product', controller.addProduct)

module.exports = router