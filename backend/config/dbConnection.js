const { default: mongoose } = require('mongoose')
mongoose.set('strictQuery', true);
const colors = require('colors')

mongoose.connect(process.env.DB_URL)
const connection = mongoose.connection


connection.on('connected', () => {
    console.log("DB Connection success".bold.italic.underline.green);
})
connection.on('error', (error) => {
    console.log(`"DB Connection Failed :"${error}`.bold.italic.underline.red);
})

module.exports = mongoose