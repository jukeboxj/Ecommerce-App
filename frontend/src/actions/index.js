import { category } from "../data/categories";

//#region Cart
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const STOP_SHAKE_CART = 'STOP_SHAKE_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export const INCREMENT_CART_ITEM_QUANTITY = 'INCREMENT_CART_ITEM_QUANTITY';
export const DECREMENT_CART_ITEM_QUANTITY = 'DECREMENT_CART_ITEM_QUANTITY';

export const addProductToCart = product => {
    return {
        type: ADD_PRODUCT_TO_CART,
        payload: product
    }
};

export const stopShakeCart = () => {
    return {
        type: STOP_SHAKE_CART
    }
}

export const removeProductToCart = productId => {
    return {
        type: REMOVE_PRODUCT_FROM_CART,
        payload: productId
    }
};

export const incrementCartQuantity = productId => {
    return{
        type: INCREMENT_CART_ITEM_QUANTITY,
        payload: productId
    }
};

export const decrementCartQuantity = productId => {
  return {
      type: DECREMENT_CART_ITEM_QUANTITY,
      payload: productId
  }
};
//#endregion 

//#region Filter
export const ADD_CATEGORY_TO_FILTER = 'ADD_CATEGORY_TO_FILTER';
export const REMOVE_CATEGORY_FROM_FILTER = 'REMOVE_CATEGORY_FROM_FILTER';
export const REMOVE_ALL_CATEGORY_FROM_FILTER = 'REMOVE_ALL_CATEGORY_FROM_FILTER';

export const addCategoryToFilter = category => {
    return {
        type: ADD_CATEGORY_TO_FILTER,
        category
    }
};

export const removeCategoryFromFilter = category => {
    return  {
        type: REMOVE_CATEGORY_FROM_FILTER,
        category
    }
};

export const removeAllCategoryFromFilter = () => {
    return  {
        type: REMOVE_ALL_CATEGORY_FROM_FILTER
    }
};
//#endregion

//#region Sort
export const ORDER_BY_ASC = 'ORDER_BY_ASC';
export const ORDER_BY_DESC = 'ORDER_BY_DESC';
export const CLEAR_ORDER_BY_PRICE = 'CLEAR_ORDER_BY_PRICE';

export const orderByAsc = () => {
    return {
        type: ORDER_BY_ASC
    }
};

export const orderByDesc =  () => {
    return {
        type: ORDER_BY_DESC
    }
};

export const clearOrderBy = () => {
    return {
        type: CLEAR_ORDER_BY_PRICE
    }
};
//#endregion

//#region Change page
export const PREV_PAGE = 'PREV_PAGE';
export const NEXT_PAGE = 'NEXT_PAGE';
export const GO_PAGE = 'GO_PAGE';
export const COUNT_ITEM = 'COUNT_ITEM';


export const nextPage = () => {
    return {
        type: NEXT_PAGE
    }
};

export const prevPage = () => {
    return {
        type: PREV_PAGE
    }
};

export const goPage = (n) => {
    return {
        type: GO_PAGE,
        currentPage: n
    }
};

export const countItem = (n) => {
    return {
        type: COUNT_ITEM,
        totalItemsCount: n
    }
}
//#endregion 