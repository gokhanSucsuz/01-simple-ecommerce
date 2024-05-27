import { useDispatch } from "react-redux"
import { removeFromCart } from "../../redux/cartSlice"
import PropTypes from "prop-types"


export const CartComponent = ({ cart }) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(removeFromCart(cart?.id));
    }

    return (
        <div className='my-4 border-separate shadow-sm flex justify-between'>

            <img className='w-[150px] h-[150px] object-cover' src={cart?.image} alt="" />
            <div className='w-[476px]'>
                <div>{cart?.title}</div>
                <div>{cart?.description}</div>
            </div>
            <div>{cart?.price} $ ({cart?.quantity})</div>
            <div
                className='m-2 p-2 bg-red-500 w-[100px] h-[40px] text-center text-white rounded-sm cursor-pointer'
                onClick={handleClick}>
                Delete
            </div>
        </div>
    )
}

CartComponent.propTypes = {
    cart: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        quantity: PropTypes.number,
    }).isRequired,
};