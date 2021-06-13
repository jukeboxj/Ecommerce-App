import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatMoney } from '../pipes/priceFormatter'
import { placeOrder } from '../actions/orderActions'
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

function Checkout() {
    const dispatch = useDispatch()
    const loading = useSelector(state => state.order.loading)
    const cart = useSelector(state => state.shop.cart)
    const totalPrice = cart.reduce((count, curItem) => {
        return count + curItem.price * curItem.quantity
    }, 0)
    const region = useSelector(state => state.order.region)

    const handleClick = () => {
        dispatch(placeOrder())
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
                <button
                    className="btn btn-outline-primary"
                    onClick={handleClick}
                    disabled={!region}
                >
                    Check Out for <b>${formatMoney(totalPrice)}</b>
                </button>
            )}
        </div>
    )
}

export default Checkout
