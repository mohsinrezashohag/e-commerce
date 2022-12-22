const { default: mongoose } = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const productSchema = new mongoose.Schema({

    user: {
        type: ObjectId,
        require: true,
        ref: 'User'
    },
    name: {
        type: String,
        trim: true,
        require: true,
        maxLength: [30, 'minimum 3 letter needed'],
    },
    image: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        trim: true
    },
    brand: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true,
    },
    countInStock: {
        type: Number,
        require: true,
        default: 0,
    },
    ratting: {
        type: Number,
        require: true,
        default: 0
    },

    review: [reviewSchema],

    numReviews: {
        type: Number,
        require: true,
        default: 0
    },

}, {
    timestamps: true,
})



const Product = mongoose.model('Product', userSchema)

module.exports = Product