const { default: mongoose } = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');


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
        maxLength: [30, 'minimum 3 letter needed'],
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
    ratting: {
        type: Number,
        required: 0
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



const Product = mongoose.model('Product', userSchema)

module.exports = Product