import mongoose from 'mongoose'

const Schema = mongoose.Schema

const orderSchema = new Schema(
    {
        region: String,
        order: [
            {
                title: String,
                images: [String],
                category: String,
                price: Number,
                description: String,
            },
        ],
        createdAt: Date,
        updatedAt: Date,
    },
    { timestamps: true }
)

export default mongoose.model('Order', orderSchema)
