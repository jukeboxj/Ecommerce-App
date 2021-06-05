import 'colors'
import dotenv from 'dotenv'
import { seeds } from './seeds.mjs'
import Product from '../models/productModel.mjs'
import connectDB from '../config/db.mjs'

dotenv.config()
console.log(process.env.MONGO_URI)

connectDB()

const seedDB = async () => {
    try {
        await Product.deleteMany({})
        for (const s of seeds) {
            const i = new Product({
                title: s.title,
                images: s.images,
                category: s.category,
                price: s.price,
                description: s.description,
            })
            await i.save()
        }

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destoy = async () => {
    try {
        await Product.deleteMany({})

        console.log('Data Destroyed!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destoy()
} else {
    seedDB()
}
