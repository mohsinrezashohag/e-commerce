const colors = require('colors')
const dotenv = require('dotenv').config();

//models
const User = require('./models/user.model')
const Product = require('./models/product.model')
const Order = require('./models/order.model')

//data's
const users = require('./data/users')
const products = require('./data/products')

// connect db
const dbConnection = require('./config/dbConnection')


// data importing
const importData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()

        const createdUser = await User.insertMany(users);

        const adminUser = createdUser[0]._id;

        const sampleProduct = products.map(product => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProduct)
        console.log('Data imported successfully'.green.inverse);
        process.exit()


    } catch (error) {
        console.log(error);
        console.log('Data import failed'.red.inverse);
        process.exit(1)
    }

}

// data deleting
const removeData = async () => {
    try {
        await User.deleteMany()
        await Product.deleteMany()
        await Order.deleteMany()
        console.log('Data removed successfully'.red.inverse);
        process.exit()

    } catch (error) {
        console.log('Data removed failed'.red.inverse);
        process.exit(1)
    }
}

if (process.argv[2] === '-add') {
    importData()
}
if (process.argv[2] === '-delete') {
    removeData()
}