import { useDispatch } from "react-redux"
import { removeFromCart } from "../../redux/cartSlice"

export const CartComponent = ({ cart }) => {
    const dispatch = useDispatch()
    return (
        <div className='my-10 my-4 border-separate shadow-sm flex justify-between'>
            <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
            <div className='w-[476px]'>
                <div>{cart?.title}</div>
                <div>{cart?.description}</div>
            </div>
            <div>{cart?.price} $ ({cart?.quantity})</div>
            <div className='m-2 p-2 bg-red-500 w-[100px] h-[40px] text-center text-white rounded-sm cursor-pointer' onClick={() => dispatch(removeFromCart(cart?.id))}>Delete</div>
        </div>
    )
}
