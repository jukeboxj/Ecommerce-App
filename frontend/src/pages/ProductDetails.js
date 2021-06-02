import React from 'react';
import {connect} from 'react-redux';
import ProductDetailComponent from '../components/ProductDetail/ProductDetail';
import ProductSlider from "../components/ProductSlider/ProductSlider";

const ProductDetails = (props) => {

    console.log(props);

    return (
        <div className="container" style={{padding: '6rem 0'}}>
            <div className="card">
                <div className="row">
                    <ProductSlider images={props.product.images}/>
                    <ProductDetailComponent product={props.product}/>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) =>  {

    const product = state.productList.products.find(product => product._id === props.match.params._id);

    return {
        product
    }
};



export default connect(mapStateToProps, null)(ProductDetails);
