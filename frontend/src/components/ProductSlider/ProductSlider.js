import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { cumulativeOffSet } from '../../utilities/cumulativeOffset'
import './ProductSlider.scss'

const ProductSlider = ({ product }) => {
    console.log('we are in proudct slider and product is:', product)
    const imageRef = React.createRef()
    const [img, setImg] = useState(product.images[0])
    const [aItem, setAItem] = useState(0)

    const handleImageChange = e => {
        const currentX = e.clientX - cumulativeOffSet(imageRef.current).left

        console.dir(imageRef.current)

        const part = imageRef.current.clientWidth / product.images.length
        console.log(Math.ceil(currentX / part) - 1)

        let imgIndex = Math.ceil(currentX / part) - 1
        if (imgIndex < 0) {
            imgIndex = 0
        }

        if (imgIndex >= product.images.length) {
            imgIndex = product.images.length - 1
        }
        setAItem(imgIndex)
        setImg(product.images[imgIndex])
    }

    const handleMouseOut = e => {
        setImg(product.images[0])
        setAItem(0)
    }

    const changeImage = i => {
        setImg(product.images[i])
        setAItem(i)
    }

    return (
        <aside className="col-sm-5 border-right">
            <article className="gallery-wrap">
                <div className="img-big-wrap">
                    <div style={{ padding: '2rem' }}>
                        <a href="#">
                            <img
                                ref={imageRef}
                                onMouseMove={handleImageChange}
                                onMouseOut={handleMouseOut}
                                src={img}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </a>
                    </div>
                </div>
                <div className="img-small-wrap">
                    {product.images.map((img, i) => (
                        <div
                            className="item-gallery"
                            onClick={() => {
                                changeImage(i)
                            }}
                        >
                            <img src={img} />
                        </div>
                    ))}
                </div>
            </article>
        </aside>
    )
}

export default ProductSlider
