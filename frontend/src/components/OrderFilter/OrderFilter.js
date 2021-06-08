import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    clearOrderBy,
    orderByAsc,
    orderByDesc,
} from '../../actions'

const OrderFilter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.orderBy)

    const handleRadioChange = e => {
        const ascClass = document.getElementById('asc').classList
        const desClass = document.getElementById('des').classList
        const id = e.currentTarget.id

        console.log('id is', id)
        console.log('filter is', filter)

        if (
            (id === 'asc' && filter === 'des') ||
            (id === 'asc' && filter === '')
        ) {
            dispatch(orderByAsc())
            ascClass.add('active')
            desClass.remove('active')
        } else if (
            (id === 'des' && filter === 'asc') ||
            (id === 'des' && filter === '')
        ) {
            dispatch(orderByDesc())
            ascClass.remove('active')
            desClass.add('active')
        } else {
            removeFilter()
        }
    }

    const removeFilter = () => {
        const btns = document.getElementsByName('orderByPrice')
        btns.forEach(btn => {
            btn.classList.remove('active')
            console.log(btn)
        })

        dispatch(clearOrderBy())
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
        <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between">
                <h1 className="mb-1 fs-4">Price</h1>
                {removeSelected}
            </div>
            <ul className="list-group list-group-flush">
                <button
                    className="list-group-item list-group-item-action list-group-item-light text-capitalize"
                    name="orderByPrice"
                    id="asc"
                    key="asc"
                    onClick={handleRadioChange}
                >
                    Low to high
                </button>
                <button
                    className="list-group-item list-group-item-action list-group-item-light text-capitalize"
                    name="orderByPrice"
                    id="des"
                    key="des"
                    onClick={handleRadioChange}
                >
                    High to Low
                </button>
            </ul>
        </div>
    )
}

export default OrderFilter
