import React, {useState} from 'react';
import {connect} from 'react-redux';
import {shortenTitle} from "../../pipes/shortenTitle";
import {formatMoney} from "../../pipes/priceFormatter";
import './CartItem.scss';
import {addProductToCart, decrementCartQuantity, incrementCartQuantity, removeProductToCart} from "../../actions";

const CartItem = (
    {
        title,
        price,
        description,
        quantity,
        id,
        img,
        dispatch
    }
) => {

    console.log(id);
    const [itemQuantity, setItemQuantity] = useState(quantity);
    const removeItem = () => {
        dispatch(removeProductToCart(id));
    };

    const incrementOrDecrement = (e, type) => {
        const value = itemQuantity;
        console.log(type, value);

        if(type === 'inc' && value < 10) {
            setItemQuantity(itemQuantity + 1);
            dispatch(incrementCartQuantity(id));
        }


        if(type === 'desc' && value > 1) {
            setItemQuantity(itemQuantity - 1);
            dispatch(decrementCartQuantity(id));
        }

    };


    return (
        <div className="row align-items-center mb-3">
            <div className="col-12 col-sm-12 col-md-2 text-center">
                <img className="img-responsive" src={img} style={{height: '60%', width: '60%'}} alt={description} />
            </div>
            <div className="col-12 text-sm-center col-sm-12 text-md-start col-md-6">
                <h4 className="product-name"><strong>{shortenTitle(title)}</strong></h4>
                <h6>
                    <small className="product-description text-muted">{description}</small>
                </h6>
            </div>
            <div className="col-12 col-sm-12 text-sm-center col-md-4 text-md-end row product-quantity-container align-items-center">
                <div className="col-6 col-sm-6 col-md-6 text-md-end" style={{paddingTop: '5px'}}>
                    <h6><strong>${formatMoney(price)} <span className="text-muted">x</span></strong></h6>
                </div>
                <div className="col-4 col-sm-4 col-md-4">
                    <div className="quantity">
                        <input
                            onClick={(e) => {incrementOrDecrement(e, 'inc')}}
                            type="button" value="+" className="plus" />
                        <input
                            type="number" step="1" max="10" min="1" value={itemQuantity} title="Qty"
                                className="qty"
                                size="4" />
                        <input
                            onClick={(e) => {incrementOrDecrement(e, 'desc')}}
                            type="button" value="-" className="minus" />
                    </div>
                </div>
                <div className="col-2 col-sm-2 col-md-1 text-end">
                <i 
                    className="bi bi-x-octagon btn btn-outline-danger btn-xs"  
                    onClick={removeItem}
                />
                </div>
            </div>
        </div>
    );
};

export default connect()(CartItem);
