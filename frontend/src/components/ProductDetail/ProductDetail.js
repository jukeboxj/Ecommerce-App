import React from 'react';
import {connect} from 'react-redux';
import {formatMoney} from "../../pipes/priceFormatter";
import {addProductToCart, stopShakeCart} from "../../actions";

const ProductDetail = (props) => {

    const {
        title,
        images,
        category,
        price,
        cpu,
        camera,
        size,
        weight,
        display,
        battery,
        memory,
        description,
        id
    } = props.product;

    const onCart = () => {
        props.dispatch(addProductToCart(props.product));
        setTimeout(() => {
            props.dispatch(stopShakeCart())
        }, 500)
    };

    return (
        <aside className="col-sm-7">
            <article className="card-body p-5">
                <h3 className="title mb-3">{title}</h3>

                <p className="price-detail-wrap">
                    <span className="price h3 text-warning">
                        <span className="currency">$</span><span className="num">{formatMoney(price)}</span>
                    </span>
                </p>
                <dl className="item-property">
                    <dt>Description</dt>
                    <dd><p className="text-capitalize">{description}</p></dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Category</dt>
                    <dd className="text-capitalize">{category}</dd>
                </dl>
                {/* <dl className="param param-feature">
                    <dt>Size</dt>
                    <dd>{size}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Camera</dt>
                    <dd>{camera}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>CPU</dt>
                    <dd>{cpu}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Memory</dt>
                    <dd>{memory}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Display</dt>
                    <dd>{display}</dd>
                </dl>
                <dl className="param param-feature">
                    <dt>Battery</dt>
                    <dd>{battery}</dd>
                </dl> */}
             
                <button
                    onClick={onCart}
                    className="btn btn-lg btn-outline-primary text-uppercase"
                >
                    <i class="bi bi-cart-plus-fill me-2" />
                    Add to cart
                </button>
            </article>
        </aside>
    );
};

export default connect()(ProductDetail);