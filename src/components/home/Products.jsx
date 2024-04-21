import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice'
import Loading from "../Loading"
import Product from './Product'

const Products = () => {
  const dispatch = useDispatch()
  const { products, productStatus } = useSelector(store => store.products)

  console.log(products)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  return (
    <div>
      {
        productStatus == "LOADING" ? <Loading /> :

          <div className='flex flex-wrap'>
            {
              products?.map((product, index) =>
                <Product key={index} product={product} />
              )
            }
          </div>
      }
    </div>
  )
}

export default Products