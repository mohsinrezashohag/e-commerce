const app = require('./app');
const dotenv = require('dotenv').config();
const dbConnection = require('./config/dbConnection')
const colors = require('colors')

app.listen(process.env.PORT, () => {
    console.log(`Server Running On : ${process.env.PORT}`.italic.bold.underline.yellow);
})