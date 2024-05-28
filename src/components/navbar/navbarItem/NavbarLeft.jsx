import { NavLink } from "react-router-dom"

const NavbarLeft = () => {
    return (
        <div className='flex text-lg sm:text-xl md:text-2xl font-bold text-orange-400'>
            <NavLink to="/" >Simple E-Commerce</NavLink>
        </div>
    )
}

export default NavbarLeft