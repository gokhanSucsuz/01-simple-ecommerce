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
        <div className='w-fit bg-slate-300 rounded-xl p-4 max-h-screen'>

            <div className='border-b pb-4 text-xl font-bold p-2'>Categories</div>
            {
                categories?.map((category, index) =>
                    <div className='text-lg mt-2 cursor-pointer rounded-lg hover:bg-orange-200 hover:text-slate-700 hover:font-bold p-2 ' key={index} onClick={() => setCategory(category)}>{category?.toUpperCase()}</div>
                )
            }
        </div>
    )
}

Category.propTypes = {
    setCategory: PropTypes.func.isRequired,
};

export default Category