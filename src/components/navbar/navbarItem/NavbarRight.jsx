import { useEffect } from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { BiSearch } from "react-icons/bi"
import { SlBasket } from "react-icons/sl"
import { useDispatch, useSelector } from "react-redux"
import { getCartTotal } from "../../../redux/cartSlice"
import { useNavigate } from "react-router-dom"

const NavbarRight = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { itemCount } = useSelector(store => store.carts)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div className="flex items-center gap-8">
      <div className="flex items-center border p-3 rounded-full bg-lime-200">
        <input className="bg-lime-200 outline-none" type="text" placeholder="Search Area..." />
        <BiSearch size={20} />
      </div>
      <AiOutlineHeart size={20} />
      <div className="relative" onClick={() => navigate("cart")}>
        <div className="absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center">{itemCount}</div>
        <SlBasket size={20} />
      </div>
    </div>
  )
}

export default NavbarRight