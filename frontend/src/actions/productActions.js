import axios from 'axios'
export const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
export const PRODUCT_LIST_SUCCESS = 'PRODUCT_LIST_SUCCESS'
export const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'
export const PRODUCT_REQUEST = 'PRODUCT_REQUEST'
export const PRODUCT_SUCCESS = 'PRODUCT_SUCCESS'
export const PRODUCT_FAIL = 'PRODUCT_FAIL'

export const listProducts = () => async dispatch => {
    try {
        dispatch({ type: PRODUCT_LIST_REQUEST })

        const { data } = await axios.get('/api/products')

        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}

export const listProduct = _id => async (dispatch, getState) => {
    try {
        dispatch({ type: PRODUCT_REQUEST })

        let { products } = getState().productList
        if (products === undefined || products.length === 0) {
            await dispatch(listProducts())
            products = getState().productList.products
        }

        const product = await products.find(p => p._id === _id)

        if (product === undefined) {
            throw new Error(_id + '- Not Found')
        } else {
            dispatch({
                type: PRODUCT_SUCCESS,
                payload: product,
            })
        }
    } catch (error) {
        dispatch({
            type: PRODUCT_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}
