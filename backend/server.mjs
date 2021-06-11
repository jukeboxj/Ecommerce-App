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
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Stubborn Attachments',
                            images: ['https://i.imgur.com/EHyR2nP.png'],
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}?success=true`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
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
