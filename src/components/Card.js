import React from 'react'

function Card({item}) {
  return (
    <div className='card'>
        <img src={item.img} alt=""/> 
    </div>
  )
}

export default Card