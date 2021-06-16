import 'colors'
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import methodOverride from 'method-override'
import connectDB from './config/db.mjs'

import productRoutes from './routes/productRoutes.mjs'
import orderRoutes from './routes/orderRoutes.mjs'

dotenv.config()

connectDB()

const app = express()
const __dirname = path.resolve()

const VIEWS = path.join(__dirname, '../frontend/build')
const INDEX = path.resolve(VIEWS, 'index.html')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))

app.use('/api/products', productRoutes)
app.use('/api/orders', orderRoutes)

// app.get('*', (req, res) => {
//     res.sendFile(INDEX)
// })

const port = process.env.PORT
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})
