import React from 'react'
import { connect, useSelector } from 'react-redux'
import { formatMoney } from '../pipes/priceFormatter'
import CartItem from '../components/CartItem/CartItem'

const ShoppingCart = props => {
    const cart = useSelector(state => state.shop.cart)
    const cartItemCount = cart.reduce((count, curItem) => {
        return count + curItem.quantity
    }, 0)
    const totalPrice = cart.reduce((count, curItem) => {
        return count + curItem.price * curItem.quantity
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
                                <CartItem {...cart} img={cart.images[0]} />
                            ))
                        ) : (
                            <li className="list-group-item text-center m-5">
                                There is no product in your cart
                            </li>
                        )}
                    </ul>
                    <div className="card-footer">
                        <div className="text-end" style={{ margin: '10px' }}>
                            <div style={{ margin: '5px' }}>
                                Total price: <b>${formatMoney(totalPrice)}</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCart
