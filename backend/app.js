const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const products = require('./data/products')
// middleware
app.use(cors())
app.use(express.json())
// app.use(bodyParser.json())
// app.use(morgan())
app.use(cookieParser())


app.get('/', (req, res) => {
    res.send("Working Fine")
})

const userRoutes = require('./routes/user.routes');
const productRoutes = require('./routes/product.routes')
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/product', productRoutes)

module.exports = app