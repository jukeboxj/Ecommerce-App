import React from 'react'
import { useDispatch } from 'react-redux'
import { setRegion } from '../../actions/orderActions'
import Checkout from '../Checkout'
import regions from '../../utilities/regions'

const CardFooter = ({ cartItemCount }) => {
    const dispatch = useDispatch()

    const selectPhrase = 'Please Select Your Region'

    const handleChange = e => {
        const r = e.target.value
        if (r !== selectPhrase) dispatch(setRegion(r))
        else dispatch(setRegion(''))
    }

    return (
        <div>
            {cartItemCount ? (
                <div className="d-flex flex-sm-wrap align-content-center justify-content-between m-auto">
                    <select
                        className="form-select w-auto"
                        aria-label="select"
                        onChange={handleChange}
                    >
                        <option selected>{selectPhrase}</option>
                        {regions.map(region => (
                            <option className="" value={region} key={region}>
                                {region}
                            </option>
                        ))}
                    </select>
                    <div className="">
                        <Checkout />
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

export default CardFooter
