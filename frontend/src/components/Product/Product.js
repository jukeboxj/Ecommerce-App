import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { formatMoney } from '../../pipes/priceFormatter'
import { cumulativeOffSet } from '../../utilities/cumulativeOffset'
// import classNames from 'classnames'

import './Product.scss'
import SlideDots from '../SlideDots/SlideDots'
import { addProductToCart } from '../../actions/shopActions'

const Product = props => {
    const { product } = props
    const { title, price, images, description, _id } = product

    const dispatch = useDispatch()
    const imageRef = React.createRef()
    const [img, setImg] = useState(images[0])
    const [aItem, setAItem] = useState(0)

    const handleImageChange = e => {
        let clientX

        if (e.type === 'touchmove') {
            clientX = e.touches[0].clientX
        } else {
            clientX = e.clientX
        }

        const currentX = clientX - cumulativeOffSet(imageRef.current).left

        // console.dir(imageRef.current);

        const part = imageRef.current.clientWidth / images.length
        // console.log(Math.ceil(currentX / part) - 1);

        let imgIndex = Math.ceil(currentX / part) - 1
        if (imgIndex < 0) {
            imgIndex = 0
        }

        if (imgIndex >= images.length) {
            imgIndex = images.length - 1
        }
        setAItem(imgIndex)
        setImg(images[imgIndex])
    }

    const handleMouseOut = e => {
        setImg(images[0])
        setAItem(0)
    }

    const changeImage = i => {
        setImg(images[i])
        setAItem(i)
    }

    const handleAddToCart = () => {
        dispatch(addProductToCart(product))
    }

    return (
        <div className="card h-100 product">
            <Link to={`/products/${_id}`} className="p-0">
                <div
                    className="card-img-top carousel slide"
                    data-bs-ride="carousel"
                >
                    <div className="carousel-indicators">
                        <SlideDots
                            len={images.length}
                            activeItem={aItem}
                            changeItem={changeImage}
                        />
                    </div>
                    <img
                        onMouseMove={handleImageChange}
                        onMouseOut={handleMouseOut}
                        onTouchMove={handleImageChange}
                        onTouchEnd={handleMouseOut}
                        className="img-thumbnail border-0"
                        src={img}
                        alt={title}
                        ref={imageRef}
                    />
                </div>
            </Link>
            <div className="card-body product__text pb-0">
                <h4 classNames="card-title product__title">
                    <Link to={`/products/${_id}`}>{title}</Link>
                </h4>
                <h6 className="product__price">${formatMoney(price)}</h6>
                <p className="card-text product__description mb-1">
                    {description} ...
                </p>
                <div className="card-footer bg-transparent border-top-0">
                    <button
                        onClick={handleAddToCart}
                        className="btn btn-outline-primary product__add-to-cart"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default connect()(Product)
