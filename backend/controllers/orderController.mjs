import dotenv from 'dotenv'
import asyncHandler from 'express-async-handler'
import Order from '../models/orderModel.mjs'
import taxRate from '../config/taxRate.mjs'
import Stripe from 'stripe'

if (process.env.NODE_ENV !== 'production') dotenv.config()

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
const YOUR_DOMAIN =
    process.env.NODE_ENV === 'development'
        ? 'http://localhost:2000/'
        : process.env.ROOT_URL

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrder = asyncHandler(async (req, res) => {
    const { cart, region } = req.body

    if (cart.length === 0) {
        res.status(400)
        throw new Error('No order items')
    } else {
        const order = new Order({
            order: cart,
            region,
        })
        await order.save()

        const items = cart.map(i => {
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
                allowed_countries: ['CA'],
            },
            line_items: items,
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}?success=true`,
            cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        })

        res.json({ id: session.id })
    }
})

export { addOrder }
