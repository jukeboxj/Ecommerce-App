import 'colors'
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import methodOverride from 'method-override'
import connectDB from './config/db.mjs'

import productRoutes from './routes/productRoutes.mjs'
import orderRoutes from './routes/orderRoutes.mjs'

if (process.env.NODE_ENV !== 'development') dotenv.config()

connectDB()

const app = express()
const __dirname = path.resolve()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

if (process.env.NODE_ENV === 'production') {
    const STATIC = path.join(__dirname, '/frontend/build')
    const INDEX = path.resolve(STATIC, 'index.html')

    app.use(express.static(STATIC))
    app.get('*', (req, res) => {
        res.sendFile(INDEX)
    })
} else {
    app.get('/', (req, res) => {
        res.sendFile('API is running...')
    })
}

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})
