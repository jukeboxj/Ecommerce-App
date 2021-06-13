import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../../components/Product/Product'
import { categoryFilter } from '../../pipes/categoryFilter'
import { orderByFilter } from '../../pipes/orderByFilter'

const ProductList = () => {
    const categories = useSelector(state => state.categoryFilter)
    const orderBy = useSelector(state => state.orderBy)
    const products = useSelector(state => state.productList.products)
    const orderFilterProducts = orderByFilter(
        categoryFilter(products, categories),
        orderBy
    )

    return (
        <div className="col-lg-9">
            <div className="row">
                {orderFilterProducts.map(product => {
                    return (
                        <div
                            className="col-lg-4 col-md-6 mb-4"
                            key={product._id}
                        >
                            <Product key={product._id} product={product} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList
