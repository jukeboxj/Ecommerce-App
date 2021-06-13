import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem/CartItem'
import Checkout from '../components/Checkout'

const ShoppingCart = () => {
    const cart = useSelector(state => state.shop.cart)

    const cartItemCount = cart.reduce((count, curItem) => {
        return count + curItem.quantity
    }, 0)

    return (
        <>
            <div className="container pb-5">
                <div className="card shopping-cart">
                    <div className="card-header bg-dark text-light">
                        <i
                            className="bi bi-cart-fill me-2"
                            aria-hidden="true"
                        />
                        Shopping Cart
                        <div className="clearfix"></div>
                    </div>
                    <ul className="list-group list-group-flush">
                        {cartItemCount ? (
                            cart.map(cart => (
                                <CartItem
                                    {...cart}
                                    img={cart.images[0]}
                                    key={cart._id}
                                />
                            ))
                        ) : (
                            <li
                                className="list-group-item text-center m-5"
                                key="noItem"
                            >
                                There is no product in your cart
                            </li>
                        )}
                    </ul>
                    <div className="card-footer">
                        <div
                            className="d-flex justify-content-center justify-content-md-between"
                            style={{ margin: '10px' }}
                        >
                            <div
                                href="#"
                                className="list-group list-group-horizontal-sm"
                            >
                                <a href="#" className="list-group-item">
                                    NL
                                </a>
                                <a href="#" className="list-group-item">
                                    PE
                                </a>
                                <a href="#" className="list-group-item">
                                    NS
                                </a>
                                <a href="#" className="list-group-item">
                                    NB
                                </a>
                                <a href="#" className="list-group-item">
                                    QC
                                </a>
                                <a href="#" className="list-group-item">
                                    ON
                                </a>
                                <a href="#" className="list-group-item">
                                    MB
                                </a>
                                <a href="#" className="list-group-item">
                                    SK
                                </a>
                                <a href="#" className="list-group-item">
                                    AB
                                </a>
                                <a href="#" className="list-group-item">
                                    BC
                                </a>
                                <a href="#" className="list-group-item">
                                    YT
                                </a>
                                <a href="#" className="list-group-item">
                                    NT
                                </a>
                                <a href="#" className="list-group-item">
                                    NU
                                </a>
                            </div>
                            <div></div>
                            {cartItemCount ? <Checkout /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart
