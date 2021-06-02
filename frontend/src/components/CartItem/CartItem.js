import React, { useState } from 'react'
import { connect } from 'react-redux'
import { shortenTitle } from '../../pipes/shortenTitle'
import { formatMoney } from '../../pipes/priceFormatter'
import './CartItem.scss'
import {
    addProductToCart,
    decrementCartQuantity,
    incrementCartQuantity,
    removeProductToCart,
} from '../../actions/shopActions'

const CartItem = ({
    title,
    price,
    description,
    quantity,
    _id,
    img,
    dispatch,
}) => {
    const [itemQuantity, setItemQuantity] = useState(quantity)
    const removeItem = () => {
        dispatch(removeProductToCart(_id))
    }

    const incrementOrDecrement = (e, type) => {
        const value = itemQuantity
        console.log(type, value)

        if (type === 'inc' && value < 10) {
            setItemQuantity(itemQuantity + 1)
            dispatch(incrementCartQuantity(_id))
        }

        if (type === 'desc' && value > 1) {
            setItemQuantity(itemQuantity - 1)
            dispatch(decrementCartQuantity(_id))
        }
    }

    return (
        <li className="list-group-item">
            <div className="row align-items-center m-0 border-dark">
                <div className="col-sm-12 col-md-2 text-center">
                    <img
                        className="img-responsive"
                        src={img}
                        style={{ height: '1000%', width: '100%' }}
                        alt={description}
                    />
                </div>
                <div className="text-sm-center col-sm-12 text-md-start col-md-5">
                    <h4 className="product-name">
                        <strong>{shortenTitle(title)}</strong>
                    </h4>
                    <h6>
                        <small className="product-description text-muted">
                            {description}
                        </small>
                    </h6>
                </div>
                <div className="col-sm-12 text-sm-center col-md-5">
                    <div className="row align-items-center d-flex justify-content-center justify-content-md-end">
                        <div className="col-5 col-sm-5 col-md-5 d-flex justify-content-center align-items-center">
                            <p className="m-0">
                                <strong>
                                    ${formatMoney(price)}{' '}
                                    <span className="fs-6 text-muted">x</span>
                                </strong>
                            </p>
                        </div>
                        <div className="col-4 col-sm-4 col-md-4 d-flex justify-content-center">
                            <div className="quantity">
                                <input
                                    onClick={e => {
                                        incrementOrDecrement(e, 'inc')
                                    }}
                                    type="button"
                                    value="+"
                                    className="plus"
                                />
                                <input
                                    type="number"
                                    step="1"
                                    max="10"
                                    min="1"
                                    value={itemQuantity}
                                    title="Qty"
                                    className="qty"
                                    size="4"
                                />
                                <input
                                    onClick={e => {
                                        incrementOrDecrement(e, 'desc')
                                    }}
                                    type="button"
                                    value="-"
                                    className="minus"
                                />
                            </div>
                        </div>
                        <div className="col-2 col-sm-2 col-md-2">
                            <i
                                className="bi bi-x-octagon btn btn-outline-danger btn-xs"
                                onClick={removeItem}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default connect()(CartItem)
