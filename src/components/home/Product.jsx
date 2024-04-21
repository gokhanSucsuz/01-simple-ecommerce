import { useNavigate } from "react-router-dom"

const Product = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`products/${product?.id}`)} className='w-[460px] p-5 mb-2 mx-2 rounded-m relative border shadow-2xl hover:font-bold cursor-pointer'>
            <div className="text-xl font-bold absolute rounded-md top-2 right-2 bg-lime-500 text-white">{product?.price}<span className="pl-3">
                $
            </span></div>
            <img className="w-[200px] h-[200px] object-cover m-auto" src={product?.image} alt="" />
            <h4 className="text-lg px-3 mt-3 text-center">{product?.title}</h4>
        </div>
    )
}

export default Product