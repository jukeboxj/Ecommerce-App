//#region Cart
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART'
export const STOP_SHAKE_CART = 'STOP_SHAKE_CART'
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART'
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY'
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY'
export const CLEAR_CART = 'CLEAR_CART'

export const addProductToCart = product => (dispatch, getState) => {
    dispatch({
        type: ADD_PRODUCT_TO_CART,
        payload: product,
    })
    setTimeout(() => {
        dispatch({ type: STOP_SHAKE_CART })
    }, 500)
    localStorage.setItem('cart', JSON.stringify(getState().shop.cart))
}

export const removeProductToCart = productId => (dispatch, getState) => {
    dispatch({
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId,
    })
    localStorage.setItem('cart', JSON.stringify(getState().shop.cart))
}

export const incrementCartQuantity = productId => (dispatch, getState) => {
    dispatch({
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId,
    })
    localStorage.setItem('cart', JSON.stringify(getState().shop.cart))
}

export const decrementCartQuantity = productId => (dispatch, getState) => {
    dispatch({
        type: DECREMENT_CART_ITEM_QUANTITY,
        payload: productId,
    })
    localStorage.setItem('cart', JSON.stringify(getState().shop.cart))
}
