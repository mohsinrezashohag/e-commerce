const Product = require('../models/product.model');
module.exports.getAllProduct = async (req, res, next) => {
    try {
        const products = await Product.find({})
        res.status(200).json({
            success: true,
            message: 'products loaded successfully',
            data: products
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'products loaded failed',
        })
    }
}

module.exports.getProductsById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id)
        res.status(200).json({
            success: true,
            message: 'product loaded successfully',
            data: product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'product loaded failed',
        })
    }
}