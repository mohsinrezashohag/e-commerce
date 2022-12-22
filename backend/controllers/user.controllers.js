const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/generateToken');

module.exports.userSignUp = async (req, res) => {
    try {
        console.log('hitting sign up');
        const newUser = req.body;
        const user = await User.create(newUser)
        console.log(user);
        res.status(200).json({
            success: true,
            message: 'user sign up successfully'
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'user sign up failed',
            error: error.message
        })
    }

}

module.exports.userSignIn = async (req, res) => {
    try {
        console.log('hitting sign in');
        const { email, password } = req.body;

        console.log(email, password);

        if (!email && !password) {
            return res.status(200).json({
                success: false,
                message: 'email or password not provided',
            })
        }

        const user = await User.findOne({ email: email })

        if (!user) {
            return res.status(200).json({
                success: false,
                message: 'user not signed up',
            })
        }

        const comparePasswords = await bcrypt.compare(password, user.password)
        if (!comparePasswords) {
            return res.status(200).json({
                success: false,
                message: 'wrong credentials',
            })
        }

        const token = generateToken({ id: user._id })
        console.log("token", token);
        user.password = undefined;

        res.status(200).json({
            success: true,
            message: 'user sign in successfully',
            data: { user, token },
        })

    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'user sign in failed',
        })
    }

}