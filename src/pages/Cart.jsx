import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice'
import { CartComponent } from '../components/cart/CartComponent'

const Cart = () => {
    const dispatch = useDispatch()
    const { carts, totalAmount, itemCount } = useSelector(store => store.carts)

    console.log(carts, totalAmount, itemCount)
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch, totalAmount, itemCount, carts])
    return (
        <div className='py-10 '>

            {
                carts?.length > 0 ? <div>
                    {
                        carts?.map((cart, index) =>
                            <CartComponent key={index} cart={cart} />
                        )
                    }
                </div> : <div>There is not any product in your cart!</div>
            }

            <div className='float-end font-bold text-red-500 text-3xl'>Total Amount: {totalAmount} $</div>
        </div>
    )
}

export default Cart