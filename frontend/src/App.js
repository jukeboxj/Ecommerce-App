import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ProductDetails from './pages/ProductDetails'
import ShoppingCart from './pages/ShoppingCart'
import { listProducts } from './actions/productActions'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <>
            <BrowserRouter>
                <React.Fragment>
                    <Header />
                    <Switch>
                        <Route exact path={'/products'} component={Home} />
                        <Route
                            exact
                            path={'/products/:_id'}
                            component={ProductDetails}
                        />
                        <Route exact path={'/cart'} component={ShoppingCart} />
                        <Route
                            render={() => {
                                return <Redirect push to={'/products'} />
                            }}
                        />
                    </Switch>
                    <Footer />
                </React.Fragment>
            </BrowserRouter>
        </>
    )
}

export default App
