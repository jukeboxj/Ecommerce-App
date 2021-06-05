import 'colors'
import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import methodOverride from 'method-override'
import connectDB from './config/db.mjs'

import productRoutes from './routes/productRoutes.mjs'

dotenv.config()

connectDB()

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
