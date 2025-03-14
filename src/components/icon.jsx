import React from 'react'

function icon({name, type, onClick}) {

  return (
    <div>
      <i className={'fa-' + type + ' fa-' + name + (onClick ? ' cursor-pointer' : '')} onClick={onClick}></i>
    </div>
  )
}

export default icon