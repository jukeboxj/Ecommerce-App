import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL,
    ORDER_RESET,
    SET_REGION,
} from '../actions/orderActions'

const regionFromStorage = localStorage.getItem('region')
    ? JSON.parse(localStorage.getItem('region'))
    : ''

const intialState = {
    region: regionFromStorage,
}

const orderReducer = (state = intialState, action) => {
    switch (action.type) {
        case PLACE_ORDER_REQUEST:
            return {
                loading: true,
                order: action.payload,
            }

        case PLACE_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                session: action.payload,
            }

        case PLACE_ORDER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }

        case ORDER_RESET:
            return {}

        case SET_REGION:
            return {
                ...state,
                region: action.payload,
            }

        default:
            return state
    }
}

export default orderReducer
