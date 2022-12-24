const bcrypt = require('bcrypt');

// const passwordHashing = async (pass) => {
//     return await bcrypt.hash(pass, 10)

// }


const users = [
    {
        name: 'Admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123445', 10),
        isAdmin: true
    },
    {
        name: 'Mohsin Reza',
        email: 'reza@gmail.com',
        password: bcrypt.hashSync('123445', 10),
        isAdmin: false
    },
    {
        name: 'Arin',
        email: 'arin@gmail.com',
        password: bcrypt.hashSync('123445', 10),
        isAdmin: false
    },

]

module.exports = users