import { useDispatch, useSelector } from 'react-redux'
import PropTypes from "prop-types"
import { useEffect } from 'react'
import { getCategories } from '../../redux/categorySlice'

const Category = ({ setCategory }) => {
    const dispatch = useDispatch()
    const { categories } = useSelector(store => store.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div className='flex flex-wrap sm:flex-col bg-slate-300 rounded-xl p-4 max-h-screen sm:max-h-fit mb-5'>

            <div className='border-b pb-4 text-xl font-bold p-2 hidden sm:flex'>Categories</div>
            {
                categories?.map((category, index) =>
                    <div className='text-lg mt-2 cursor-pointer rounded-lg border-yellow-700 border mr-2 hover:bg-orange-200 hover:text-slate-700 hover:font-bold p-2' key={index} onClick={() => setCategory(category)}>{category?.toUpperCase()}</div>
                )
            }
        </div>
    )
}

Category.propTypes = {
    setCategory: PropTypes.func.isRequired,
};

export default Category