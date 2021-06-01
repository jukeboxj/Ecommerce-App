import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterBar from '../containers/FilterBar/FilterBar'
import ProductList from '../containers/ProductList/ProductList'
import Pagination from '../components/Pagination/Pagination'
import { listProducts } from '../actions/productActions'

const Home = () => {
    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.shop)

    useEffect(() => {
        dispatch(listProducts(''))
    }, [dispatch])

    return (
        <>
            {loading ? (
                <h1>IT IS LOADING</h1>
            ) : error ? (
                <h1>ERROR OCCURRED - {error}</h1>
            ) : (
                <React.Fragment>
                    <div className="container" style={{ paddingTop: '6rem' }}>
                        <div className="row">
                            <FilterBar />
                            <ProductList />
                        </div>
                    </div>
                </React.Fragment>
            )}
        </>
    )
}

export default Home
