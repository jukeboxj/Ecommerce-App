import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.mjs'
import taxRate from '../config/taxRate.mjs'
import Stripe from 'stripe'

const stripe = new Stripe(
    'sk_test_51CM58QAHdwvoELa8SjyoBAAMeXRGgx8Ac4XpZIhZ442GDkWLoSBaqok2EwgfhARmWEnoVvilhDVcvs9EJq1B0pWF00Q6mhrDLm'
)
const YOUR_DOMAIN = 'http://localhost:2000/products'

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrder = asyncHandler(async (req, res) => {
    const { order, region } = req.body
    const items = order.map(i => {
        return {
            quantity: i.quantity,
            price_data: {
                currency: 'cad',
                unit_amount_decimal: i.price * 100,
                product_data: {
                    name: i.title,
                    images: [i.images[0]],
                },
            },
            tax_rates: [taxRate(region)],
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
    })

    res.json({ id: session.id })
})

export { addOrder }
