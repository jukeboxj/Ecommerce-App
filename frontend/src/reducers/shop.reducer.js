import {
    ADD_PRODUCT_TO_CART,
    STOP_SHAKE_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART,
} from '../actions/index'

import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

// import { items } from '../data/items'

const initialState = {
    products: [],
    cart: [],
    shakeCart: false,
}

const shopReducer = (state = initialState, action) => {
    let updatedCart
    let updatedItemIndex

    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                products: action.payload.products,
            }

        case PRODUCT_LIST_FAIL:
            return { loading: false, error: action.payload }

        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart]
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            )

            const incrementedItem = {
                ...updatedCart[updatedItemIndex],
            }

            incrementedItem.quantity++

            updatedCart[updatedItemIndex] = incrementedItem

            return { ...state, cart: updatedCart }

        case DECREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart]
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            )

            const decrementedItem = {
                ...updatedCart[updatedItemIndex],
            }

            decrementedItem.quantity--

            updatedCart[updatedItemIndex] = decrementedItem

            return { ...state, cart: updatedCart }

        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart]
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload.id
            )

            if (updatedItemIndex < 0) {
                updatedCart.push({ ...action.payload, quantity: 1 })
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex],
                }

                updatedItem.quantity++
                updatedCart[updatedItemIndex] = updatedItem
            }

            return { ...state, cart: updatedCart, shakeCart: true }

        case STOP_SHAKE_CART:
            return { ...state, shakeCart: false }

        case REMOVE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart]
            updatedItemIndex = updatedCart.findIndex(
                item => item.id === action.payload
            )

            updatedCart.splice(updatedItemIndex, 1)

            return { ...state, cart: updatedCart }
        default:
            return state
    }
}

export default shopReducer
