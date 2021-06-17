import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FilterBar from '../containers/FilterBar/FilterBar'
import ProductList from '../containers/ProductList/ProductList'
import Spinner from '../components/Spinner/Spinner'
import Message from '../components/Message'
import { listProducts } from '../actions/productActions'
import { clearCart } from '../actions/shopActions'

const Home = () => {
    const dispatch = useDispatch()
    const { loading, error, products } = useSelector(state => state.productList)
    const [message, setMessage] = useState('')
    const [variant, setVariant] = useState('info')

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search)

        if (query.get('success')) {
            setMessage('Order placed! You will receive an email confirmation.')
            setVariant('success')
            dispatch(clearCart())
        } else if (query.get('canceled')) {
            setMessage(
                "Order canceled - continue to shop around and checkout when you're ready."
            )
            setVariant('warning')
        } else {
            if (products.length === 0 || products === undefined)
                dispatch(listProducts())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <React.Fragment>
            <div className="container">
                {loading ? (
                    <Spinner />
                ) : error ? (
                    <Message children={error} />
                ) : message ? (
                    <Message children={message} variant={variant} />
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
