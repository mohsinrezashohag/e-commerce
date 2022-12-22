const express = require('express')
const router = express.Router()
const productControllers = require('../controllers/product.controller')

router.route('/show-all')
    .get(productControllers.getAllProduct)
router.route('/show-by-id/:id')
    .get(productControllers.getProductsById)

module.exports = router