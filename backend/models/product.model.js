const { default: mongoose } = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const ObjectId = mongoose.Schema.Types.ObjectId


const reviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ratting: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true

    }
}, {
    timestamps: true
})



const productSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        trim: true,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        trim: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        default: 0,
    },
    rating: {
        type: Number,
        required: true
    },

    review: [reviewSchema],

    numReviews: {
        type: Number,
        required: true,
        default: 0
    },

}, {
    timestamps: true,
})



const Product = mongoose.model('Product', productSchema)

module.exports = Product