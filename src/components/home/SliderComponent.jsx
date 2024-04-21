import Slider from "react-slick";

const SliderComponent = () => {
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
                <div className="!flex items-center bg-gray-100 p-6">
                    <div className="mx-4">
                        <div className="text-3xl font-bold">Lorem ipsum dolor sit amet.</div>
                        <div className="text-lg my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem quia nesciunt doloribus labore provident fuga dignissimos aperiam numquam error nobis quidem, alias nam hic placeat tenetur et voluptates dolorum. Nemo corporis odio est minima id quaerat nisi doloremque minus.</div>
                        <div className="border rounded-full cursor-pointer text-xl w-[200px] h-8 flex items-center justify-center bg-lime-200">Review</div>
                    </div>
                    <img src="https://img1-newbalance.mncdn.com/mnpadding/960/960/FFFFFF/newbalance/products/NBMR530OW_1.jpg" width={400} alt="" />
                </div>
                <div className="!flex items-center bg-gray-100 p-6">
                    <div className="mx-4">
                        <div className="text-3xl font-bold">Lorem ipsum dolor sit amet.</div>
                        <div className="text-lg my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem quia nesciunt doloribus labore provident fuga dignissimos aperiam numquam error nobis quidem, alias nam hic placeat tenetur et voluptates dolorum. Nemo corporis odio est minima id quaerat nisi doloremque minus.</div>
                        <div className="border rounded-full cursor-pointer text-xl w-[200px] h-8 flex items-center justify-center bg-lime-200">Review</div>
                    </div>
                    <img src="https://img1-newbalance.mncdn.com/mnpadding/960/960/FFFFFF/newbalance/products/NBWS327NA_1.jpg" width={400} alt="" />
                </div>
                <div className="!flex items-center bg-gray-100 p-6">
                    <div className="mx-4">
                        <div className="text-3xl font-bold">Lorem ipsum dolor sit amet.</div>
                        <div className="text-lg my-4">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem quia nesciunt doloribus labore provident fuga dignissimos aperiam numquam error nobis quidem, alias nam hic placeat tenetur et voluptates dolorum. Nemo corporis odio est minima id quaerat nisi doloremque minus.</div>
                        <div className="border rounded-full cursor-pointer text-xl w-[200px] h-8 flex items-center justify-center bg-lime-200">Review</div>
                    </div>
                    <img src="https://img1-newbalance.mncdn.com/mnpadding/960/960/FFFFFF/newbalance/products/NBBB550VGA_1.jpg" width={400} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default SliderComponent