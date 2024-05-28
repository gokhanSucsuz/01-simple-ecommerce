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
  const { carts } = useSelector(store => store.carts)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div className="hidden sm:flex items-center gap-8">
      <div className="hidden lg:flex items-center border p-3 rounded-full bg-orange-300">
        <input className="bg-orange-300 outline-none font-bold placeholder-slate-500" type="text" placeholder="Search Area..." />
        <BiSearch className="text-slate-500" size={20} />
      </div>
      <div className="flex gap-4 md:gap-8 pe-5">
        <AiOutlineHeart className="text-white" size={20} />
        <div className="relative cursor-pointer" onClick={() => navigate("cart")}>
          <div className="absolute -top-3 -right-3 bg-red-400 text-white rounded-full w-4 h-4 flex items-center justify-center">{carts?.length}</div>
          <SlBasket className="text-white" size={20} />
        </div>
      </div>
    </div>
  )
}

export default NavbarRight