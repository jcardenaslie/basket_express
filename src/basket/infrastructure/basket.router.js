const express = require('express')
const router = express.Router()
const controller = require('./basket.controller')

router.get('/:id', controller.getById )

router.post('/', controller.create )

router.put('/', controller.update )

router.delete('/:id', controller.remove )

router.post('/:id/product', controller.addProduct )

module.exports = router