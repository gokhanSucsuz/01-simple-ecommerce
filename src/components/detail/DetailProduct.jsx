import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';
import { addToWishlist } from '../../redux/wishlistSlice';
import { FaMinusCircle, FaPlusCircle } from 'react-icons/fa';



const DetailProduct = ({ productDetail }) => {
    const [quantity, setQuantity] = useState(1)
    const dispatch = useDispatch()

    const handleClick = (e) => {
        if (e.target.textContent === "-" && quantity > 1) {
            setQuantity(quantity - 1)
        } else if (e.target.textContent === "+") {
            productDetail?.rating.count > quantity &&
                setQuantity(quantity + 1)
        }
    }

    const addBasket = () => {
        dispatch(addToCart({
            id: productDetail?.id,
            title: productDetail?.title,
            image: productDetail?.image,
            price: productDetail?.price,
            quantity: quantity

        }))
        toast.success(`${quantity} products added to your cart successfully!`)
    }

    const addWishlist = () => {
        dispatch(addToWishlist({
            id: productDetail?.id,
            title: productDetail?.title,
            image: productDetail?.image,
            price: productDetail?.price,

        }))
        toast.success(`${quantity} products added to whishlist successfully!`)
    }

    return (
        <div className='h-[calc(100dvh-232px)]'>
            <Toaster position="top-right"
                reverseOrder={true} />

            <div className='flex flex-wrap gap-5 py-5'>
                <div className='h-40 md:h-52 lg:h-60  w-96 flex justify-center'>
                    <img className='h-40 md:h-52 lg:h-60 object-cover rounded-xl ' src={productDetail?.image} alt={productDetail?.title} />
                </div>
                <div className='text-sm md:text-lg lg:text-xl max-w-4xl'>
                    <div className='text-sm md:text-lg lg:text-xl font-bold py-5'>{productDetail?.title}</div>
                    <div className='text-sm md:text-lg lg:text-xl pb-5'>{productDetail?.description}</div>
                    <div className=' py-3 text-orange-400 font-bold'>{productDetail?.price} <span className='text-xl'>$</span></div>
                    <div className='flex flex-wrap justify-between gap-1'>
                        <div className='flex gap-3 font-bold items-center'>
                            <div className='cursor-pointer' onClick={handleClick}><FaMinusCircle className='hover:scale-105' />
                            </div>
                            <div>{quantity}</div>
                            <div className='cursor-pointer' onClick={handleClick}><FaPlusCircle className='hover:scale-105' />
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-2'>
                            <div id="liveToastBtn" className={`bg-orange-300 w-fit p-2 border rounded-md cursor-pointer max-h-12 flex items-center justify-center readonly text-sm md:text-lg lg:text-xl`} onClick={addBasket}>
                                Add to Cart
                            </div>
                            <div id="liveToastBtn" className={`bg-orange-300 w-fit p-2 border rounded-md cursor-pointer max-h-12 flex items-center justify-center readonly text-sm md:text-lg lg:text-xl`} onClick={addWishlist}>
                                Add to Whishlist
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

DetailProduct.propTypes = {
    productDetail: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        image: PropTypes.string,
        price: PropTypes.number,
        description: PropTypes.string,
        rating: PropTypes.shape({
            rate: PropTypes.number,
            count: PropTypes.number,
        }),
    }),
};

export default DetailProduct