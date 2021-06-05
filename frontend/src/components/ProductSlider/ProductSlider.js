import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import SlideDots from '../SlideDots/SlideDots'
import { cumulativeOffSet } from '../../utilities/cumulativeOffset'

const ProductSlider = ({ match }) => {
    const { images } = useSelector(state => state.product.product)
    const [img, setImg] = useState(images[0])
    const [aItem, setAItem] = useState(0)
    const imageRef = React.createRef()

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

    console.log('product slider rendered')

    return (
        <aside className="col-lg-4 slider border-right d-flex align-items-center">
            <div style={{ padding: '0.5rem' }}>
                <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators d-flex align-items-end mb-0">
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
                        key={img}
                        alt={img}
                        ref={imageRef}
                    />
                </div>
            </div>
        </aside>
    )
}

export default ProductSlider
