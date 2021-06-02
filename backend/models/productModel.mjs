import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema({
    title: String,
    images: [String],
    category: String,
    price: Number,
    description: String,
})

export default mongoose.model('Products', productSchema)
