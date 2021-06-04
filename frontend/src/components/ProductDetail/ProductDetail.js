import React from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { formatMoney } from '../../pipes/priceFormatter'
import { addProductToCart } from '../../actions/shopActions'

const ProductDetail = () => {
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.product)

    const handleAddToCart = () => {
        dispatch(addProductToCart(product))
    }

    return (
        <aside className="col-lg-8">
            <article className="card-body p-5">
                <h3 className="card-title mb-3">{product.title}</h3>

                <p className="price-detail-wrap">
                    <span className="price h3 text-warning">
                        <span className="currency">$</span>
                        <span className="num">
                            {product.price ? formatMoney(product.price) : null}
                        </span>
                    </span>
                </p>
                <dl className="item-property">
                    <dt>Description</dt>
                    <dd>
                        <p className="text-capitalize">{product.description}</p>
                    </dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Category</dt>
                    <dd className="text-capitalize">{product.category}</dd>
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
