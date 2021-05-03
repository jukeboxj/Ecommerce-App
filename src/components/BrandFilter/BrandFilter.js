import React, {Component, useState} from 'react';
import {connect} from 'react-redux';
import './BrandFilter.scss';
import {brands} from "../../data/brands";
import {addBrandToFilter, removeBrandFromFilter, removeAllBrandFromFilter} from "../../actions";


const BrandFilter = (props) => {

    let removeSelected;
    const {dispatch, brandItemsCount} = props;
    const [selected, setSelected] = useState('');

    const handleSelectBox = (e) => {
        const name = e.target.name;
        const value = e.target.checked;
        setSelected(value);

        if(e.target.checked) {
            dispatch(addBrandToFilter(name));
        } else {
            dispatch(removeBrandFromFilter(name));
        }
    };

    const removeFilter = (e) => {

        brands.forEach(
            b => {
                const btn = document.getElementsByName(b);
                //btn yields a nodelist, but all btn names are unique
                btn[0].checked = false;
            }
        )

        dispatch(removeAllBrandFromFilter())
        setSelected('');
    };

    if(selected) {
        removeSelected  =  
            <span onClick={removeFilter} className="text-remove-selected text-right">
                Remove
            </span>
    }

    return (
        <div className="card mb-3">
            <div className="card-header d-flex align-items-center justify-content-between">
                <h3>Brands</h3>
                {removeSelected}
            </div>
            <ul className="list-group flex-row flex-wrap">
                {brands.map(brand => (
                    <li className="list-group-item flex-50">
                        <label className="custom-checkbox text-capitalize"> {brand} ({brandItemsCount[brand]})
                            <input 
                                type="checkbox"
                                name={brand}
                                className="custom-checkbox__input" 
                                onInput={handleSelectBox}
                            />
                            <span className="custom-checkbox__span"></span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );

};

const mapStateToProps = (state) => {

    const brandItemsCount = {};

    state.shop.products.forEach(p => {
        brandItemsCount[p.brand] = brandItemsCount[p.brand] + 1 || 1;
    });


    return {
        brandItemsCount
    }

};

export default connect(mapStateToProps)(BrandFilter);