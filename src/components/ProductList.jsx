import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productSlice';
import Products from './Products';
import Loading from './Loading'

function ProductList() {
  const dispatch = useDispatch();
  const {products} = useSelector((store) => store.product);

  const {loading} = useSelector((state) => state.product)
  
  useEffect(() =>{
    dispatch(getAllProducts())
  }, [])

  return (
    <div>
      { loading ? 
        <Loading></Loading>
      :
        <div className='grid grid-cols-5 gap-5 mx-5 mt-10'>
          {
            products && products.map((product)=>(
              <Products key={product.id} product={product}></Products>
            ))
          }
        </div>
      }
        
    </div>
 
  )
}

export default ProductList