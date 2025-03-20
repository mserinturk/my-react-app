import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { setSelectedProduct } from '../redux/slices/productSlice';
import Icon from '../components/Icon'
import { addToBasket } from '../redux/slices/basketSlice';

function ProductDetails() {
  const {id} = useParams();
  const {products, selectedProduct} = useSelector((store) => store.product)
  const dispatch = useDispatch();
  const { price, image, title, description } = selectedProduct

  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    getProductById();
  }, [])

  const getProductById = () => {
    products && products.map((product) => {
      if(product.id == id){
        dispatch(setSelectedProduct(product));
      }
    })
  }

  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    setQuantity(quantity - 1)
  }

  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      quantity
    }
    dispatch(addToBasket(payload))
  }

  return (
    <div className='p-20 flex'>
      <div className='w-full flex justify-center p-20'>
        <img src={image} alt="" className='object-contain w-1/2'/>
      </div>
      <div className='w-full px-20'>
        <div className='border-b border-gray-200 pb-10'>
          <h2 className='font-semibold text-2xl mb-5'>{title}</h2>
          <span className='text-sm text-gray-500 mb-10 block'>{description}</span>
          <div className='flex space-x-5 items-center'>
            <div className='flex space-x-3 items-center'>
              <span className='bg-gray-100 text-gray-700 p-3 rounded-full flex items-center justify-center w-8 h-8 cursor-pointer' onClick={decreaseQuantity}>
                <Icon name="minus" type="light"></Icon>
              </span>
              <span className='w-12 text-center'>{ quantity }</span>
              <span className='bg-gray-100 text-gray-700 p-3 rounded-full flex items-center justify-center w-8 h-8 cursor-pointer' onClick={increaseQuantity}>
                <Icon name="plus" type="light"></Icon>
              </span>
            </div>
            <span className='px-5 py-2 rounded-lg bg-gray-50 text-gray-700 block w-fit font-semibold'>{price} USD</span>
          </div>
        </div>
        <div className='pt-10'>
          <button className='flex items-center space-x-3 bg-red-500 text-red-50 px-5 py-2.5 rounded-lg cursor-pointer'>
            <Icon name="basket-shopping" type="light"></Icon>
            <span className='text-sm' onClick={addBasket}>Add Basket</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails