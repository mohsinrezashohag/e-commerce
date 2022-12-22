var jwt = require('jsonwebtoken');
module.exports.generateToken = (id) => {
    return jwt.sign(id, process.env.RANDOM_HEX, { expiresIn: '7 days' })
}