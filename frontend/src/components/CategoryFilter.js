import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { categories } from '../data/categories'
import {
    addCategoryToFilter,
    removeCategoryFromFilter,
    removeAllCategoryFromFilter,
} from '../actions'

const CategoryFilter = () => {
    const dispatch = useDispatch()
    const { categoryItemsCount } = useSelector(state => {
        const categoryItemsCount = {}

        state.productList.products.forEach(p => {
            categoryItemsCount[p.category] =
                categoryItemsCount[p.category] + 1 || 1
        })

        return {
            categoryItemsCount,
        }
    })
    const filter = useSelector(state => state.categoryFilter)

    const handleSelectBox = e => {
        const name = e.currentTarget.name
        const classes = document.getElementsByName(name)[0].classList

        if (classes.contains('active')) {
            dispatch(removeCategoryFromFilter(name))
            classes.remove('active')
        } else {
            dispatch(addCategoryToFilter(name))
            classes.add('active')
        }
    }

    const removeFilter = () => {
        dispatch(removeAllCategoryFromFilter())
        categories.forEach(b => {
            const btn = document.getElementsByName(b)
            //btn yields a nodelist, but all btn names are unique
            btn[0].classList.remove('active')
        })
    }

    let removeSelected
    if (filter) {
        removeSelected = (
            <span
                onClick={removeFilter}
                className="badge bg-secondary"
                style={{ cursor: 'pointer' }}
            >
                Remove
            </span>
        )
    }

    return (
        <div className="card mb-3">
            <div className="card-header d-flex align-items-center justify-content-between">
                <h1 className="mb-1 fs-4">Category</h1>
                {removeSelected}
            </div>
            <ul className="list-group list-group-flush">
                {categories.map(category => (
                    <button
                        className="list-group-item list-group-item-action list-group-item-light text-capitalize"
                        name={category}
                        aria-controls={category}
                        key={category}
                        onClick={handleSelectBox}
                    >
                        {category} ({categoryItemsCount[category]})
                    </button>
                ))}
            </ul>
        </div>
    )
}

export default CategoryFilter
