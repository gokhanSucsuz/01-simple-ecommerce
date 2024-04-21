import { useState } from "react"
import Category from "../components/home/Category"
import Product from "../components/home/Products"
import SliderComponent from "../components/home/SliderComponent"
import Sorting from "../components/home/Sorting"

const Home = () => {
  const [sort, setSort] = useState("")
  const [category, setCategory] = useState("")


  return (
    <div>
      <SliderComponent />
      <Sorting />
      <div className="flex">
        <Category setCategory={setCategory} />
        <Product category={category} />

      </div>
    </div>
  )
}

export default Home