import React from 'react'
import { useSelector } from 'react-redux'
import { formatMoney } from '../../pipes/priceFormatter'
import { loadStripe } from '@stripe/stripe-js'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

function Checkout() {
    const loading = false
    const cart = useSelector(state => state.shop.cart)
    const totalPrice = cart.reduce((count, curItem) => {
        return count + curItem.price * curItem.quantity
    }, 0)

    const handleClick = async event => {
        const stripe = await stripePromise
        const response = await fetch('/create-checkout-session', {
            method: 'POST',
        })
        const session = await response.json()
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        })
        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
        }
    }

    return (
        <div>
            {loading ? (
                <button
                    className="btn btn-outline-secondary"
                    disabled
                    type="button"
                >
                    <span
                        className="spinner-border spinner-border-sm"
                        role="status"
                        aria-hidden="true"
                    ></span>{' '}
                    Loading...
                </button>
            ) : (
                <button className="btn btn-outline-primary">
                    Check Out for <b>${formatMoney(totalPrice)}</b>
                </button>
            )}
        </div>
    )
}

export default Checkout
