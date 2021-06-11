import React, {Component} from 'react';
import CategoryFilter from "../../components/CategoryFilter";
import OrderFilter from "../../components/OrderFilter";

class FilterBar extends Component {
    render() {
        return (
            <div className="col-lg-3">
                <div className="row">
                    <div className="col-12">
                        <CategoryFilter/>
                    </div>
                    <div className="col-12 pb-3">
                        <OrderFilter/>
                    </div>
                </div>
            </div>
        );
    }
}

export default FilterBar;