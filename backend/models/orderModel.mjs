import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema({
    // region: { String, required: true },
    order: [
        {
            title: String,
            images: [String],
            category: String,
            price: Number,
            description: String,
        },
    ],
})

export default mongoose.model('Order', orderSchema)
