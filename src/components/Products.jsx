import React from 'react'
import { useNavigate } from 'react-router'

function Products({product}) {

  const{id, price, image, title, description} = product

  const navigate = useNavigate();

  return (
      <div className='border border-gray-300 p-5 rounded-lg relative'>
        <div className='flex justify-center p-2 mb-3'>
          <img src={image} alt="" className='h-64'/>
        </div>
        <div>
          <h2 className='font-semibold mb-3 line-clamp-1 cursor-pointer' onClick={()=> navigate("/product-details/" + id)}>{title}</h2>
          <span className='text-gray-500 text-sm line-clamp-3'>{description}</span>
        </div>
        <div className='bg-red-500 text-red-50 w-fit p-2 rounded-lg absolute top-5 right-5 text-sm'>
          { price } USD
        </div>
      </div>
  )
}

export default Products