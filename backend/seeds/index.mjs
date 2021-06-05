import mongoose from 'mongoose'
import { seeds } from './seeds.mjs'
import Products from '../models/productModel.mjs'

mongoose.connect('mongodb://localhost:27017/kirkfall', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
})

const seedDB = async () => {
    try {
        await Products.deleteMany({})
        for (const s of seeds) {
            const i = new Products({
                title: s.title,
                images: s.images,
                category: s.category,
                price: s.price,
                description: s.description,
            })
            await i.save()
        }
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destoy = async () => {
    try {
        await Products.deleteMany({})
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if (process.argv[2] === '-d') {
    destoy().then(() => {
        mongoose.connection.close()
    })
    console.log('Data Destroyed!')
} else {
    seedDB().then(() => {
        mongoose.connection.close()
        console.log('Data Imported!')
    })
}
