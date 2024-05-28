import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotal } from '../redux/cartSlice'
import { CartComponent } from '../components/cart/CartComponent'
import toast, { Toaster } from 'react-hot-toast'

const Cart = () => {
    const dispatch = useDispatch()
    const { carts, totalAmount, itemCount } = useSelector(store => store.carts)
    const [buttonState, setButtonState] = useState(0)

    useEffect(() => {
        dispatch(getCartTotal())
        setButtonState(buttonState + 1)
    }, [dispatch, totalAmount, itemCount, carts])


    useEffect(() => {
        buttonState > 0 && toast.error("Product removed from your cart!")
    }, [totalAmount])



    return (
        <div className='py-10 h-[calc(100dvh-220px)]'>
            <Toaster position="top-right"
                reverseOrder={true} />
            {
                carts?.length > 0 ? <div>
                    {
                        carts?.map((cart, index) =>
                            <CartComponent key={index} cart={cart} />
                        )
                    }
                </div> : <div>There is not any product in your cart!</div>
            }

            <div className='float-end font-bold text-red-500 text-3xl py-5'>Total Amount: {totalAmount} $</div>
        </div>
    )
}

export default Cart