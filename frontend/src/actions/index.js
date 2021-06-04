//#region Filter
export const ADD_CATEGORY_TO_FILTER = 'ADD_CATEGORY_TO_FILTER'
export const REMOVE_CATEGORY_FROM_FILTER = 'REMOVE_CATEGORY_FROM_FILTER'
export const REMOVE_ALL_CATEGORY_FROM_FILTER = 'REMOVE_ALL_CATEGORY_FROM_FILTER'

export const addCategoryToFilter = category => {
    return {
        type: ADD_CATEGORY_TO_FILTER,
        category,
    }
}

export const removeCategoryFromFilter = category => {
    return {
        type: REMOVE_CATEGORY_FROM_FILTER,
        category,
    }
}

export const removeAllCategoryFromFilter = () => {
    return {
        type: REMOVE_ALL_CATEGORY_FROM_FILTER,
    }
}
//#endregion

//#region Sort
export const ORDER_BY_ASC = 'ORDER_BY_ASC'
export const ORDER_BY_DESC = 'ORDER_BY_DESC'
export const CLEAR_ORDER_BY_PRICE = 'CLEAR_ORDER_BY_PRICE'

export const orderByAsc = () => {
    return {
        type: ORDER_BY_ASC,
    }
}

export const orderByDesc = () => {
    return {
        type: ORDER_BY_DESC,
    }
}

export const clearOrderBy = () => {
    return {
        type: CLEAR_ORDER_BY_PRICE,
    }
}
//#endregion

//#region Change page
export const PREV_PAGE = 'PREV_PAGE'
export const NEXT_PAGE = 'NEXT_PAGE'
export const GO_PAGE = 'GO_PAGE'
export const COUNT_ITEM = 'COUNT_ITEM'

export const nextPage = () => {
    return {
        type: NEXT_PAGE,
    }
}

export const prevPage = () => {
    return {
        type: PREV_PAGE,
    }
}

export const goPage = n => {
    return {
        type: GO_PAGE,
        currentPage: n,
    }
}

export const countItem = n => {
    return {
        type: COUNT_ITEM,
        totalItemsCount: n,
    }
}
//#endregion
