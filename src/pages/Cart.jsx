import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cartSlice'
import { CartComponent } from '../components/cart/CartComponent'

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { carts, totalAmount, itemCount } = useSelector(store => store.carts)

    console.log(carts, totalAmount, itemCount)
    useEffect(() => {
        dispatch(getCartTotal())
    })
    return (
        <div className='py-10'>

            {
                carts?.length > 0 ? <div>
                    {
                        carts?.map((cart, index) =>
                            <CartComponent key={index} cart={cart} />
                        )
                    }
                </div> : <div>Error</div>
            }
        </div>
    )
}

export default Cart