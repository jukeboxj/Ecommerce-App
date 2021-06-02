import React from 'react'
import { connect } from 'react-redux'
import ProductDetailComponent from '../components/ProductDetail/ProductDetail'
import ProductSlider from '../components/ProductSlider/ProductSlider'

const ProductDetails = props => {
    const { product } = props
    const { images } = product

    return (
        <div className="container" style={{ padding: '6rem 0' }}>
            <div className="card">
                <div className="row">
                    <ProductSlider images={images} />
                    <ProductDetailComponent product={product} />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    const product = state.productList.products.find(
        p => p._id === props.match.params._id
    )

    return { product }
}

export default connect(mapStateToProps, null)(ProductDetails)
