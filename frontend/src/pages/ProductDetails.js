import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductDetail from '../components/ProductDetail/ProductDetail'
import ProductSlider from '../components/ProductSlider/ProductSlider'
import { listProduct } from '../actions/productActions'
import Spinner from '../components/Spinner/Spinner'

const ProductDetails = ({ match }) => {
    const dispatch = useDispatch()

    const { loading, error } = useSelector(state => state.product)
    const _id = match.params._id

    useEffect(() => {
        return dispatch(listProduct(_id))
    }, [dispatch, _id])

    return (
        <>
            {loading ? (
                <Spinner />
            ) : error ? (
                <h1>ERROR OCCURRED - {error}</h1>
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
