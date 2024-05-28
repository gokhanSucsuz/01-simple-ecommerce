import { useSelector } from "react-redux";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const SliderComponent = () => {
    const navigate = useNavigate()
    const { products } = useSelector(store => store.products)
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <Slider {...settings}>
                {
                    products?.map((product, index) =>
                        <div key={index} className="!flex items-center bg-gray-100 p-6">
                            <div className="mx-4">
                                <div className="text-3xl font-bold">{product?.title}</div>
                                <div className="text-lg my-4 font-bold text-red-700">${product?.price}</div>
                                <div onClick={() => navigate(`products/${product?.id}`)} className="border rounded-full cursor-pointer text-xl w-[200px] h-8 flex items-center justify-center bg-lime-200">Review</div>
                            </div>
                            <img className="w-[200px] h-[400px] object-cover m-auto" src={product?.image} width={400} alt="" />
                        </div>
                    )
                }
            </Slider>
        </div>
    )
}

export default SliderComponent