import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import shop from './reducers/shop.reducer'
import { productReducer } from './reducers/product.reducer'
import { categoryFilterReducer } from './reducers/category.filter.reducer'
import { orderByPriceReducer } from './reducers/orderByPrice.filter.reducer'

const reducers = combineReducers({
    shop,
    product: productReducer,
    categoryFilter: categoryFilterReducer,
    orderBy: orderByPriceReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store
