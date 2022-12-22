const { default: mongoose } = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        require: true,
        maxLength: [30, 'minimum 3 letter needed'],
    },
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true,
        validate: [validator.isEmail, "must be a valid email"]
    },
    password: {
        type: String,
        require: true,
    },
    about: {
        type: String,
        trim: true,
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    },
    history: {
        type: Array,
        default: []
    }
}, {
    timestamps: true,
})

userSchema.pre('save', async function (next) {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    this.password = hashedPassword;
    next();
})

const User = mongoose.model('User', userSchema)

module.exports = User