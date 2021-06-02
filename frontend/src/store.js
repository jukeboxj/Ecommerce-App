import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import shop from './reducers/shop.reducer'
import { productListReducer } from './reducers/productList.reducer'
import { categoryFilterReducer } from './reducers/category.filter.reducer'
import { orderByPriceReducer } from './reducers/orderByPrice.filter.reducer'
import { paginationReducer } from './reducers/pagination.reducer'

const reducers = combineReducers({
    shop,
    productList: productListReducer,
    categoryFilter: categoryFilterReducer,
    orderBy: orderByPriceReducer,
    pagination: paginationReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
