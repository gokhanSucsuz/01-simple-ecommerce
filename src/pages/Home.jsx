import Category from "../components/home/Category"
import Product from "../components/home/Product"
import SliderComponent from "../components/home/SliderComponent"
import Sorting from "../components/home/Sorting"

const Home = () => {

  return (
    <div>
      <SliderComponent />
      <Sorting />
      <div className="flex">
        <Category />
        <Product />

      </div>
    </div>
  )
}

export default Home