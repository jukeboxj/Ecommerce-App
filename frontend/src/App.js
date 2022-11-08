import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import Header from './components/Header/Header'
import Footer from './components/Footer'
import ProductDetails from './pages/ProductDetails'
import ShoppingCart from './pages/ShoppingCart'

const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <Routes>
                    <Route exact path="/products" element={<Home />} />
                    <Route
                        exact
                        path="/products/:_id"
                        element={<ProductDetails />}
                    />
                    <Route exact path="/cart" element={<ShoppingCart />} />
                    <Route
                        path="*"
                        element={<Navigate to="/products" replace />}
                    />
                </Routes>
                <Footer />
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App
