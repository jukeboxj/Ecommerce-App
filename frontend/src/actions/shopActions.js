//#region Cart
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const STOP_SHAKE_CART = 'STOP_SHAKE_CART'
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY'
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY'
export const CLEAR_CART = 'CLEAR_CART'

export const addProductToCart = product => dispatch => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product,
    })
    setTimeout(() => {
        dispatch({ type: STOP_SHAKE_CART })
    }, 500)
}

export const removeProductToCart = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId,
    }
}

export const incrementCartQuantity = productId => {
    return {
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId,
    }
}

export const decrementCartQuantity = productId => {
    return {
        type: DECREMENT_CART_ITEM_QUANTITY,
        payload: productId,
    }
}

