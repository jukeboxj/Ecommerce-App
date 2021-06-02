import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterBar from '../containers/FilterBar/FilterBar'
import ProductList from '../containers/ProductList/ProductList'
import Pagination from '../components/Pagination/Pagination'

const Home = () => {
    return (
        <>
            (
                <React.Fragment>
                    <div className="container" style={{ paddingTop: '6rem' }}>
                        <div className="row">
                            <FilterBar />
                            <ProductList />
                        </div>
                    </div>
                </React.Fragment>
            )
        </>
    )
}

export default Home
