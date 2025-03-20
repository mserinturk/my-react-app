import React from 'react'
import Icon from './Icon'

function Loading() {
  return (
    <div className='flex justify-center py-20'>
      <Icon name='spinner' type='light'></Icon>
    </div>
  )
}

export default Loading