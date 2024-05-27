import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'
import PropTypes from 'prop-types';
import toast, { Toaster } from 'react-hot-toast';



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

    return (
        <div >
            <Toaster position="top-right"
                reverseOrder={true} />

            <div className=' flex gap-4'>
                <img className='w-[400px] object-cover' src={productDetail?.image} alt="" />
                <div className=''>
                    <div className='text-lg font-bold py-5'>{productDetail?.title}</div>
                    <div className='pb-5'>{productDetail?.description}</div>
                    {/* <div className='text-lime-700'>Rating: {productDetail?.rating.rate}</div>
                <div className='text-lime-700'>Count: {productDetail?.rating.count}</div> */}
                    <div className='text-5xl py-3 text-lime-400 font-bold'>{productDetail?.price} <span className='text-xl'>$</span></div>
                    <div className='flex gap-3 text-2xl font-bold'>
                        <div className='cursor-pointer' onClick={handleClick}>-</div>
                        <div>{quantity}</div>
                        <div className='cursor-pointer' onClick={handleClick}>+</div>
                    </div>
                    <div id="liveToastBtn" className={`bg-lime-300 w-[200px] border rounded-md cursor-pointer h-12 flex items-center justify-center my-3 readonly`} onClick={addBasket}>
                        Add to Cart
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