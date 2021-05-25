import React, {useState} from 'react';
import {connect} from 'react-redux';
import './OrderFilter.scss';
import {clearOrderBy, ORDER_BY_ASC, ORDER_BY_DESC, orderByAsc, orderByDesc} from "../../actions";

const OrderFilter = ({dispatch}) => {

    let removeSelected;
    const [selected, setSelected] = useState('');

    const handleRadioChange = (e) => {
        const value = e.target.value;
        setSelected(value);
        if(value === ORDER_BY_ASC) {
            dispatch(orderByAsc());
        } else {
            dispatch(orderByDesc());
        }
    };

    const removeFilter = (e) => {

        const buttons = document.getElementsByName('orderByPrice');
        // console.log('btn', buttons)

        buttons.forEach(el => {
            el.checked = false;
        });

        dispatch(clearOrderBy());
        setSelected('');
    };

    if(selected) {
        removeSelected  =  
            <span onClick={removeFilter} className="text-remove-selected text-right">
                Remove
            </span>
    }

    return (
            <div className="card">
                <div className="card-header d-flex align-items-center justify-content-between">
                    <h3>Price</h3>
                    {removeSelected}
                </div>
                <ul className="list-group list-group-flush" >
                    <li className="list-group-item flex-fill">
                        <label className="custom-radio-btn fs-6"> Low to high
                            <input
                                value={ORDER_BY_ASC}
                                type="radio"
                                onChange={handleRadioChange}
                                name="orderByPrice" className="custom-radio-btn__input"/>
                            <span className="custom-radio-btn__span"></span>
                        </label>
                    </li>
                    <li className="list-group-item flex-fill fs-6">
                        <label className="custom-radio-btn"> High to low
                            <input
                                value={ORDER_BY_DESC}
                                onChange={handleRadioChange}
                                type="radio" name="orderByPrice" className="custom-radio-btn__input"/>
                            <span className="custom-radio-btn__span"></span>
                        </label>
                    </li>
                </ul>
            </div>
    );
};

export default connect()(OrderFilter);