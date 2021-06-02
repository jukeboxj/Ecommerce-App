import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { formatMoney } from '../../pipes/priceFormatter'
import { addProductToCart } from '../../actions/shopActions'

const ProductDetail = props => {
    const { product } = props
    const { title, category, price, description } = product

    const dispatch = useDispatch()

    const handleAddToCart = product => {
        dispatch(addProductToCart(product))
    }

    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{title}</h3>

                <p className="price-detail-wrap">
                    <span className="price h3 text-warning">
                        <span className="currency">$</span>
                        <span className="num">{formatMoney(price)}</span>
                    </span>
                </p>
                <dl className="item-property">
                    <dt>Description</dt>
                    <dd>
                        <p className="text-capitalize">{description}</p>
                    </dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Category</dt>
                    <dd className="text-capitalize">{category}</dd>
                </dl>

                <button
                    onClick={handleAddToCart}
                    className="btn btn-lg btn-outline-primary text-uppercase"
                >
                    <i class="bi bi-cart-plus-fill me-2" />
                    Add to cart
                </button>
            </article>
        </aside>
    )
}

export default connect()(ProductDetail)
