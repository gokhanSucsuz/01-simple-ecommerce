import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const CartComponent = ({ cart }) => {
    return (
        <div className='my-10 my-4 border-separate shadow-sm flex justify-between'>
            <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
            <div>
                <div>{cart?.title}</div>
                <div>{cart?.description}</div>
            </div>
            <div>{cart?.price} $ ({cart?.quantity})</div>
            <div className='m-2 p-2 bg-red-500 w-[100px] h-[40px] text-center text-white rounded-sm'>Delete</div>
        </div>
    )
}
