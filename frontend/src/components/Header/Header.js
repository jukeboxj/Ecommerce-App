import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = ({ cartCount, shakeCart }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">
                    Kirkfall
                </NavLink>
                <div className={shakeCart ? 'wiggle' : ''}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={'/cart'}>
                                <i
                                    className="bi bi-cart-fill me-2"
                                    aria-hidden="true"
                                />
                                Cart {cartCount ? `(${cartCount})` : ''}
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
        cartCount: state.shop.cart.reduce((a, b) => a + b.quantity, 0),
        shakeCart: state.shop.shakeCart,
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
