import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductDetails from './pages/ProductDetails'
import ShoppingCart from './pages/ShoppingCart'

import { listProducts } from './actions/productActions'

const App = () => {
    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.productList)

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    {loading ? (
                        <div
                            class="position-absolute top-50 start-50 translate-middle-y spinner-grow text-success"
                            role="status"
                        >
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    ) : error ? (
                        <h1>ERROR OCCURRED - {error}</h1>
                    ) : (
                        <Switch>
                            <Route exact path={'/products'} component={Home} />
                            <Route
                                exact
                                path={'/products/:id'}
                                component={ProductDetails}
                            />
                            <Route
                                exact
                                path={'/cart'}
                                component={ShoppingCart}
                            />
                            <Route
                                render={() => {
                                    return <Redirect to={'/products'} />
                                }}
                            />
                        </Switch>
                    )}
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        </>
    )
}

export default App
