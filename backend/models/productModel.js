const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    title: String,
    images: [String],
    category: String,
    price: Number,
    description: String,
})

module.exports = mongoose.model('Products', productSchema)
