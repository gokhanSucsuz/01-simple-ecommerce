import React from 'react'

const Sorting = () => {
    return (
        <div className='bg-lime-100 my-5 p-5 border-none flex items-center justify-end'>
            <select name='' id='' className='bg-lime-200 p-2 mx-5'>
                <option disabled value="">Choose</option>
                <option value="inc">Inc </option>
                <option value="dec">Dec </option>
            </select>
        </div>
    )
}

export default Sorting