import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import CartItem from "../../components/CartItem/CartItem";

const ShoppingCart = (props) => {
    return (
        <>
            <div className="container" style={{paddingTop: '6rem'}}>
                <div className="card shopping-cart">
                    <div className="card-header bg-dark text-light">
                        <i className="bi bi-cart-fill me-2" aria-hidden="true" />
                        Shopping Cart
                        <div className="clearfix"></div>
                    </div>
                    <div className="card-body">
                        {props.cartItemCount 
                        ? props.cartItems.map(
                            cart => (
                                <CartItem {...cart} img={cart.images[0]} />
                            )
                        ) 
                        : <div className="text-center">There is no product in your cart</div> }
                    </div>
                    <div className="card-footer">
                        <div className="text-end" style={{margin: '10px'}}>
                            <div style={{margin: '5px'}}>
                                Total price: <b>${formatMoney(props.totalPrice)}</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


const mapStateToProps = state => {

    console.log(state, 'state has changed');

    return {
        cartItems: state.shop.cart,
        cartItemCount: state.shop.cart.reduce((count, curItem) => {
            return count + curItem.quantity;
        }, 0),
        totalPrice: state.shop.cart.reduce((count, curItem) => {
            return count + (curItem.price * curItem.quantity);
        }, 0)
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);
