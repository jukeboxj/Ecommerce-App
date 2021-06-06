import {
    ADD_CATEGORY_TO_FILTER,
    REMOVE_CATEGORY_FROM_FILTER,
    REMOVE_ALL_CATEGORY_FROM_FILTER,
} from '../actions'

export const categoryFilterReducer = (state = '', action) => {
    switch (action.type) {
        case ADD_CATEGORY_TO_FILTER:
            if (state.includes(action.category)) return state
            return (state += action.category)

        case REMOVE_CATEGORY_FROM_FILTER:
            console.log('remove category', action)
            const reg = new RegExp(action.category, 'gi')
            return state.replace(reg, '')

        case REMOVE_ALL_CATEGORY_FROM_FILTER:
            console.log('remove all category', action)
            return (state = '')

        default:
            return state
    }
}
