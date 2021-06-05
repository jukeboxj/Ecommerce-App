import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import className from 'classnames'
import './Header.scss'

const Header = () => {
    const shakeCart = useSelector(state => state.shop.shakeCart)
    // const { loading, error, products } = useSelector(state => state.product)

    const wiggle = className('nav-item', { wiggle: shakeCart })

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top py-1">
            <div className="container">
                <NavLink className="navbar-brand" to={'/products'}>
                    Kirkfall
                </NavLink>
                <div>
                    <ul className="navbar-nav ms-auto">
                        <li className={wiggle} key="cart">
                            <NavLink className="nav-link" to={'/cart'}>
                                <i
                                    className="bi bi-cart-fill me-2"
                                    aria-hidden="true"
                                />
                                Cart
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header
