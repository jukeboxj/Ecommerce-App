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
app.use(express.json())
app.use(methodOverride('_method'))

// app.set('views', VIEWS)

// app.use(express.static(VIEWS))
app.use('/api/products', productRoutes)

//stripe session
import Stripe from 'stripe'
import asyncHandler from 'express-async-handler'

const stripe = new Stripe(
    'sk_test_51CM58QAHdwvoELa8SjyoBAAMeXRGgx8Ac4XpZIhZ442GDkWLoSBaqok2EwgfhARmWEnoVvilhDVcvs9EJq1B0pWF00Q6mhrDLm'
)
const YOUR_DOMAIN = 'http://localhost:2000/products'

app.post(
    '/api/create-checkout-session',
    asyncHandler(async (req, res) => {
        const order = req.body
        const items = order.map(i => {
            return {
                name: i.title,
                images: [i.images[0]],
                amount: i.price * 100,
                quantity: i.quantity,
                currency: 'cad',
                tax_rates: ['txr_1J1OkaAHdwvoELa8DnXutTrG'],
            }
        })

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            shipping_rates: ['shr_1J1OkyAHdwvoELa8MUq1m3oN'],
            shipping_address_collection: {
                allowed_countries: ['US', 'CA'],
            },
            line_items: items,
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}?success=true`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
            tax_id_collection: {
                enabled: true,
            },
        })

        res.json({ id: session.id })
    })
)

// app.get('*', (req, res) => {
//     res.sendFile(INDEX)
// })

app.listen(1000, () => {
    console.log('Serving on port 1000')
})
