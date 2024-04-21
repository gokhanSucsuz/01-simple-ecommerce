import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/productSlice'
import Loading from "../Loading"
import Product from './Product'
import ReactPaginate from 'react-paginate'


const Products = () => {

  const dispatch = useDispatch()
  const { products, productStatus } = useSelector(store => store.products)

  console.log(products)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div>
      {
        productStatus == "LOADING" ? <Loading /> :
          <>
            <div className='flex flex-wrap'>
              {
                currentItems?.map((product, index) =>
                  <Product key={index} product={product} />
                )
              }
            </div>
            <ReactPaginate
              className='paginate font-bold flex gap-2 justify-center align-middle'
              breakLabel="..."
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="<"
              renderOnZeroPageCount={null}
            />
          </>
      }
    </div>
  )
}

export default Products