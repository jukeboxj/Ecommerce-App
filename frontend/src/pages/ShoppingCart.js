import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem/CartItem'
import Checkout from '../components/Checkout/Checkout'

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
                            className="d-flex justify-content-center justify-content-md-end"
                            style={{ margin: '10px' }}
                        >
                            {cartItemCount ? <Checkout /> : ''}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart
