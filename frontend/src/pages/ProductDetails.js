import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetail from '../components/ProductDetail'
import ProductSlider from '../components/ProductSlider/ProductSlider'
import { listProduct } from '../actions/productActions'
import Spinner from '../components/Spinner/Spinner'
import Message from '../components/Message'

const ProductDetails = ({ match }) => {
    const dispatch = useDispatch()

    const { loading, error } = useSelector(state => state.productDetails)
    const _id = match.params._id

    useLayoutEffect(() => {
        dispatch(listProduct(_id))
    }, [dispatch, _id])

    return (
        <>
            {loading ? (
                <Spinner />
            ) : error ? (
                <Message children={error} />
            ) : (
                <div className="container" style={{ padding: '6rem 0' }}>
                    <div className="card">
                        <div className="row g-0">
                            <ProductSlider />
                            <ProductDetail />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default ProductDetails
