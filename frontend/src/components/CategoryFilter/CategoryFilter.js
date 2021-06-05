import React, { useState } from 'react'
import { connect } from 'react-redux'
import './CategoryFilter.scss'
import { categories } from '../../data/categories'
import {
    addCategoryToFilter,
    removeCategoryFromFilter,
    removeAllCategoryFromFilter,
} from '../../actions'

const CategoryFilter = props => {
    let removeSelected
    const { dispatch, categoryItemsCount } = props
    const [selected, setSelected] = useState('')

    const handleSelectBox = e => {
        const name = e.target.name
        const value = e.target.checked
        setSelected(value)

        if (e.target.checked) {
            dispatch(addCategoryToFilter(name))
        } else {
            dispatch(removeCategoryFromFilter(name))
        }
    }

    const removeFilter = e => {
        categories.forEach(b => {
            const btn = document.getElementsByName(b)
            //btn yields a nodelist, but all btn names are unique
            btn[0].checked = false
        })

        dispatch(removeAllCategoryFromFilter())
        setSelected('')
    }

    if (selected) {
        removeSelected = (
            <span
                onClick={removeFilter}
                className="text-remove-selected text-right"
            >
                Remove
            </span>
        )
    }

    return (
        <div className="card mb-3">
            <div className="card-header d-flex align-items-center justify-content-between">
                <h4>Category</h4>
                {removeSelected}
            </div>
            <ul className="list-group list-group-flush">
                {categories.map((category, i) => (
                    <li className="list-group-item flex-50" key={i}>
                        <label className="custom-checkbox text-capitalize fs-6">
                            {' '}
                            {category} ({categoryItemsCount[category]})
                            <input
                                type="checkbox"
                                name={category}
                                className="custom-checkbox__input"
                                onInput={handleSelectBox}
                            />
                            <span className="custom-checkbox__span"></span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    const categoryItemsCount = {}

    state.productList.products.forEach(p => {
        categoryItemsCount[p.category] = categoryItemsCount[p.category] + 1 || 1
    })

    return {
        categoryItemsCount,
    }
}

export default connect(mapStateToProps)(CategoryFilter)
