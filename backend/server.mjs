import express from 'express'
import path from 'path'
import methodOverride from 'method-override'
import mongoose from 'mongoose'

import productRoutes from './routes/productRoutes.mjs'

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

const app = express()
const __dirname = path.resolve()

const VIEWS = path.join(__dirname, '../frontend/build')
const INDEX = path.resolve(VIEWS, 'index.html')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(express.json())

// app.set('views', VIEWS)

// app.use(express.static(VIEWS))

app.use('/api/products', productRoutes)

// app.get('*', (req, res) => {
//     res.sendFile(INDEX)
// })

app.listen(1000, () => {
    console.log('Serving on port 1000')
})
