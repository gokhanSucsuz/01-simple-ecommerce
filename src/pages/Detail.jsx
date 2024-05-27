import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getDetailProduct } from '../redux/productSlice'
import DetailProduct from '../components/detail/DetailProduct'
import Loading from "../components/Loading"

const Detail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const { productDetail, productDetailStatus } = useSelector(store => store.products)
    const object = { ...productDetail }

    useEffect(() => {
        dispatch(getDetailProduct(id))
    }, [dispatch, id])
    return (
        <div>
            {
                productDetailStatus === "LOADING" ? <Loading /> : <DetailProduct productDetail={object} />
            }
        </div>
    )
}

export default Detail