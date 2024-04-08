import React from 'react'
import BrandsImages from '../lib/brandsImages'

const Brands = () => {
  return (
    <div className=''>
      <div className='text-center w-full flex flex-col my-12 gap-6'>
        <h2 className='font-bold text-4xl'>Join these <span className='text-primary'>brands</span></h2>
        <p className='font-semibold text-lg w-2/5 mx-auto'>We've had the pleasure of working with industry-defining brands. These are just some of them.</p>
      </div>
      <div className='grid grid-cols-5 gap-16 justify-center text-center items-center'>
      {BrandsImages.map((item,index) =>(
        <div className=' ' key={index}>
            <img src={item} alt='brand-image' className='h-auto'/>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Brands
