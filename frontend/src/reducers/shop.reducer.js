import {
    ADD_PRODUCT_TO_CART,
    STOP_SHAKE_CART,
    DECREMENT_CART_ITEM_QUANTITY,
    INCREMENT_CART_ITEM_QUANTITY,
    REMOVE_PRODUCT_FROM_CART,
} from '../actions/shopActions'

const initialState = {
    cart: [],
    shakeCart: false,
}

const shopReducer = (state = initialState, action) => {
    let updatedCart
    let updatedItemIndex

    switch (action.type) {
        case INCREMENT_CART_ITEM_QUANTITY:
            updatedCart = [...state.cart]
            updatedItemIndex = updatedCart.findIndex(
                item => item._id === action.payload
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
                item => item._id === action.payload
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
                item => item._id === action.payload._id
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
                item => item._id === action.payload
            )

            updatedCart.splice(updatedItemIndex, 1)

            return { ...state, cart: updatedCart }
        default:
            return state
    }
}

export default shopReducer
