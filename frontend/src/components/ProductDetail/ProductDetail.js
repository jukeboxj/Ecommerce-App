import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { formatMoney } from '../../pipes/priceFormatter'
import { addProductToCart } from '../../actions/shopActions'

const ProductDetail = ({ _id }) => {
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.productDetails)
    const { title, price, description, category } = product

    const handleAddToCart = () => {
        dispatch(addProductToCart(product))
    }

    console.log('product detail rendered')

    return (
        <aside className="col-lg-8">
            <article className="card-body p-5">
                <h3 className="card-title mb-3">{title}</h3>

                <p className="price-detail-wrap">
                    <span className="price h3 text-warning">
                        <span className="currency">$</span>
                        <span className="num">
                            {price ? formatMoney(price) : null}
                        </span>
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
                    <i className="bi bi-cart-plus-fill me-2" />
                    Add to cart
                </button>
            </article>
        </aside>
    )
}

export default connect()(ProductDetail)
