import React from 'react'
import './ProductSlider.scss'
import classNames from 'classnames'

const ProductSlider = ({ product }) => {
    const { images } = product
    const len = images.length

    const onNext = i => {
        if (i < len - 1) {
            return '#' + images[i + 1]
        } else {
            return '#' + images[0]
        }
    }

    return (
        <aside className="col-sm-5 border-right">
            <article className="gallery-wrap">
                <div className="img-big-wrap">
                    <div style={{ padding: '1rem' }}>
                        <div
                            id="carousel"
                            className="img-small-wrap carousel carousel-dark slide"
                            data-bs-ride="carousel"
                        >
                            <div className="carousel-indicators">
                                {images.map((img, i) => {
                                    return (
                                        <button
                                            type="button"
                                            data-bs-target="#carousel"
                                            data-bs-slide-to={i}
                                            className="active"
                                            aria-current="true"
                                            aria-label={`Slide ${i}`}
                                            key={img}
                                        ></button>
                                    )
                                })}
                            </div>
                            <div className="carousel-inner">
                                {images.map((img, i) => {
                                    const classname = classNames(
                                        'carousel-item',
                                        {
                                            active: i === 0,
                                        }
                                    )

                                    return (
                                        <div
                                            className={classname}
                                            data-bs-interval="2500"
                                            key={img}
                                        >
                                            <img
                                                src={img}
                                                className="d-block w-100"
                                                alt={i}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carousel"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carousel"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </article>
        </aside>
    )
}

export default ProductSlider
