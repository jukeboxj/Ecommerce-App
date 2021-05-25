import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './Header.scss';

const Header = ({cartLength, shakeCart}) => {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Ecommerce</NavLink>
                <div className={shakeCart? 'wiggle' : ''}>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to={"/cart"}>
                                <i className="bi bi-cart-fill me-2"
                                    aria-hidden="true"/>
                                Cart {cartLength ? `(${cartLength})`: ''}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};


const mapStateToProps = (state) => {
  return {
        cartLength: state.shop.cart.length,
        shakeCart: state.shop.shakeCart
  }
};

export default connect(mapStateToProps, null)(Header);


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