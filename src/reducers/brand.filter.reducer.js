import {ADD_BRAND_TO_FILTER, REMOVE_BRAND_FROM_FILTER, REMOVE_ALL_BRAND_FROM_FILTER} from "../actions";

export const  brandFilterReducer = (state = '', action) => {
    switch (action.type) {
        case ADD_BRAND_TO_FILTER:
            if(state.includes(action.brand)) return state;
            return state += action.brand;
        case REMOVE_BRAND_FROM_FILTER:
            console.log('remove brand', action);
            const reg = new RegExp(action.brand, 'gi');
            return state.replace(reg, '');
        case REMOVE_ALL_BRAND_FROM_FILTER:
            console.log('remove all brand', action);
            return state = '';
        default:
            return state;
    }
};

