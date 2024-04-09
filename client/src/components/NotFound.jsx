import React from 'react'
import NotFoundCanvas from '../assets/notFound.svg'
const NotFound = () => {
  return (
    <div className='w-full flex justify-center items-center '>
      <img src={NotFoundCanvas} alt='not found image'/>
    </div>
  )
}

export default NotFound
