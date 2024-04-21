import { useDispatch, useSelector } from 'react-redux'

import { useEffect } from 'react'
import { getCategories } from '../../redux/categorySlice'

const Category = () => {
    const dispatch = useDispatch()
    const { categories } = useSelector(store => store.categories)

    useEffect(() => {
        dispatch(getCategories())
    }, [dispatch])
    return (
        <div className='w-1/6 bg-lime-50 p-4'>

            <div className='border-b pb-1 text-xl font-bold p-2'>Category</div>
            {
                categories?.map((category, index) =>
                    <div className='text-lg mt-2 cursor-pointer hover:bg-lime-200 p-2' key={index} >{category}</div>
                )
            }
        </div>
    )
}

export default Category