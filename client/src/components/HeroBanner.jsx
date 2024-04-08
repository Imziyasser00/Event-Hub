import React from 'react'
import homeBanner from '../assets/home-banner.png'
const HeroBanner = () => {
  return (
    <div className='w-full h-56 bg-HeroBanner'>
      <div className='flex items-end w-4/5 h-full justify-center'>
        <div className='mx-auto'>
            <img src={homeBanner} alt='home-banner' className='w-full' />
        </div>
        <div className='flex gap-5 text-white h-full justify-center flex-col'>
            <h1 className='text-4xl font-bold'>Book Your next event</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
