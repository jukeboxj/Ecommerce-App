import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import { CLEAR_CART } from './shopActions'
export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'
export const PLACE_ORDER_FAIL = 'PLACE_ORDER_FAIL'
export const ORDER_RESET = 'ORDER_RESET'

const stripePromise = loadStripe(
    'pk_test_51CM58QAHdwvoELa8WoHPuehn9zHg03Wi9CFfA3sHi8424yfytiXNC9gFRTtPobPpOdhI15eSZ6n7VUCZw4pUfivO00WmPmsNsY'
)

export const placeOrder = () => async dispatch => {
    try {
        dispatch({ type: PLACE_ORDER_REQUEST })

        const stripe = await stripePromise
        const response = await axios.post('api/create-checkout-session')
        const session = await response.json()
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        })
        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            throw new Error('Communication Error - ' + result.error.message)
        } else {
            dispatch({
                type: PLACE_ORDER_SUCCESS,
                payload: session,
            })
            dispatch({
                type: CLEAR_CART,
            })
        }
    } catch (error) {
        dispatch({
            type: PLACE_ORDER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
