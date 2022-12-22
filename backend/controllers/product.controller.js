const products = require('../data/products');
module.exports.getAllProduct = (req, res, next) => {
    try {
        console.log('hitting when loading');
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

module.exports.getProductsById = (req, res, next) => {
    try {
        const id = req.params.id;
        const product = products.find(product => product._id === id)
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