import {
    PLACE_ORDER_REQUEST,
    PLACE_ORDER_SUCCESS,
    PLACE_ORDER_FAIL,
    ORDER_RESET,
} from '../actions/orderActions'

const orderReducer = (state = {}, action) => {
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

        default:
            return state
    }
}

export default orderReducer
