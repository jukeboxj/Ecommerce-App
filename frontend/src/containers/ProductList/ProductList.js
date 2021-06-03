import React, { Component } from 'react'
import { connect } from 'react-redux'
import Product from '../../components/Product/Product'

import { categoryFilter } from '../../pipes/categoryFilter'
import { orderByFilter } from '../../pipes/orderByFilter'

class ProductList extends Component {
    render() {
        return (
            <div className="col-lg-9">
                <div className="row">
                    {this.props.products.map(product => {
                        return (
                            <div className="col-lg-4 col-md-6 mb-4">
                                <Product key={product._id} product={product} />
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const categorys = state.categoryFilter
    const orderBy = state.orderBy

    const filterByCategoryArr = categoryFilter(
        state.product.products,
        categorys
    )
    const filterByOrderArr = orderByFilter(filterByCategoryArr, orderBy)

    return { products: filterByOrderArr }
}

export default connect(mapStateToProps, null)(ProductList)
