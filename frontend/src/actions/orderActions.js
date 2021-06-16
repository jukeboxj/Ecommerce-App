import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import { CLEAR_CART } from './shopActions'
export const PLACE_ORDER_REQUEST = 'PLACE_ORDER_REQUEST'
export const PLACE_ORDER_SUCCESS = 'PLACE_ORDER_SUCCESS'
export const PLACE_ORDER_FAIL = 'PLACE_ORDER_FAIL'
export const ORDER_RESET = 'ORDER_RESET'
export const SET_REGION = 'SET_REGION'

export const placeOrder = () => async (dispatch, getState) => {
    try {
        const cart = getState().shop.cart
        const region = getState().order.region
        if (!region) throw new Error('Region Unselected')
        dispatch({
            type: PLACE_ORDER_REQUEST,
            payload: cart,
        })

        const stripePromise = loadStripe(
            'pk_test_51CM58QAHdwvoELa8WoHPuehn9zHg03Wi9CFfA3sHi8424yfytiXNC9gFRTtPobPpOdhI15eSZ6n7VUCZw4pUfivO00WmPmsNsY'
        )
        const stripe = await stripePromise
        const response = await axios.post('api/orders', {
            cart,
            region,
        })
        const id = response.data.id

        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({ sessionId: id })
        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            throw new Error('Communication Failed - ' + result.error.message)
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

export const setRegion = region => {
    localStorage.setItem('region', JSON.stringify(region))
    return {
        type: SET_REGION,
        payload: region,
    }
}
