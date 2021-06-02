import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    const { shakeCart } = useSelector(state => state.shop)
    const { loading, error } = useSelector(state => state.productList)

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
