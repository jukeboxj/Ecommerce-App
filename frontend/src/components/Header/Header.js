import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = ({ cart, shakeCart, loading, error }) => {

    const cartCount = cart ? cart.reduce((a, b) => a + b.quantity, 0) : 0

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Kirkfall
                </NavLink>
                <div>
                    <ul className="navbar-nav ms-auto">
                        <li className={`nav-item ${shakeCart & 'wiggle'}`}>
                            <NavLink className="nav-link" to={'/cart'}>
                                <i
                                    className="bi bi-cart-fill me-2"
                                    aria-hidden="true"
                                />
                                Cart {cart ? `(${cartCount})` : ''}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    return {
        cart: state.shop.cart,
        shakeCart: state.shop.shakeCart,
        loading: state.shop.loading,
        error: state.shop.error
    }
}

export default connect(mapStateToProps, null)(Header)

/*
*                         <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
* */
