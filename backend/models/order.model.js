const { default: mongoose } = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: ObjectId,
        ref: 'User',
        required: true
    },
    orderItems: [
        {
            name: { type: String, required: true },
            qty: { type: Number, required: true },
            image: { type: String, required: true },
            price: { type: String, required: true },
            product: {
                type: ObjectId,
                ref: 'Product',
                required: true
            }
        }
    ],
    shippingAddress: {
        country: { type: String, required: true },
        city: { type: String, required: true },
        postalCode: { type: String, required: true },
        address: { type: String, required: true },
    },
    paymentMethod: {
        type: String,
        required: true
    },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        updateTime: { type: Date },
        email: { type: String }
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0.0
    },
    isPaid: {
        type: Boolean,
        required: true,
        default: false
    },
    paidAt: {
        type: Date,
        default: Date.now
    },
    isDelivered: {
        type: Boolean,
        required: true,
        default: false
    },
    deliveredAt: {
        type: Date
    }
}, {
    timestamps: true
})


const Order = new mongoose.model('Order', orderSchema)

module.exports = Order
