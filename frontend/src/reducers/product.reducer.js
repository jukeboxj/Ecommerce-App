import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,
} from '../actions/productActions'

export const productListReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true, products: [] }

        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products,
            }

        case PRODUCT_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
            }

        default:
            return state
    }
}

export const productDetailsReducer = (
    state = { product: { images: [] } },
    action
) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return { ...state, loading: true, product: { images: [] } }

        case PRODUCT_SUCCESS:
            return { ...state, loading: false, product: action.payload }

        case PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        default:
            return state
    }
}
