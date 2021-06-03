import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,
} from '../actions/productActions'

export const productReducer = (
    state = { products: [], product: { images: [] } },
    action
) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { ...state, loading: true }

        case PRODUCT_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload.products,
            }

        case PRODUCT_LIST_FAIL:
            return { ...state, loading: false, error: action.payload }

        case PRODUCT_REQUEST:
            return { ...state, loading: true }

        case PRODUCT_SUCCESS:
            return { ...state, loading: false, product: action.payload }

        case PRODUCT_FAIL:
            return { ...state, loading: false, error: action.payload }

        default:
            return state
    }
}
