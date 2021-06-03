import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterBar from '../containers/FilterBar/FilterBar'
import ProductList from '../containers/ProductList/ProductList'
import Spinner from '../components/Spinner/Spinner'
import { listProducts } from '../actions/productActions'

const Home = () => {
    const { loading, error } = useSelector(state => state.product)

    return (
        <React.Fragment>
            <div className="container">
                {loading ? (
                    <Spinner />
                ) : error ? (
                    <h1>ERROR OCCURRED - {error}</h1>
                ) : (
                    <div className="row">
                        <FilterBar />
                        <ProductList />
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Home
