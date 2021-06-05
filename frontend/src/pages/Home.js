import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterBar from '../containers/FilterBar/FilterBar'
import ProductList from '../containers/ProductList/ProductList'
import Spinner from '../components/Spinner/Spinner'
import { listProducts } from '../actions/productActions'

const Home = () => {
    const dispatch = useDispatch()
    const { loading, error, products } = useSelector(state => state.product)

    useEffect(() => {
        if (products.length === 0 || products === undefined)
            dispatch(listProducts())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

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
