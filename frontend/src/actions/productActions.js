import axios from 'axios'
import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
} from '../constants/productConstants'

export const listProducts =
    (keyword = '') =>
    async dispatch => {
        try {

            dispatch({ type: PRODUCT_LIST_REQUEST })
            console.log('product_list is dispatched')
            
            const { data } = await axios.get(`/api/products?keyword=${keyword}`)
            console.log('api/products/ responded w/ : ', data)
            
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
