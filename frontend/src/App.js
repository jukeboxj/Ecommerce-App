import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducers'

import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import ShoppingCart from './pages/ShopingCart/ShoppingCart'

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route exact path={'/products'} component={Home} />
                        <Route
                            exact
                            path={'/products/:id'}
                            component={ProductDetails}
                        />
                        <Route exact path={'/cart'} component={ShoppingCart} />
                        <Route
                            render={() => {
                                return <Redirect to={'/products'} />
                            }}
                        />
                    </Switch>
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        </Provider>
    )
}

export default App
