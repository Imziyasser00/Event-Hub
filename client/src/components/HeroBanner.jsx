import React from 'react'
import homeBanner from '../assets/home-banner.png'
const HeroBanner = () => {
  return (
    <div className='w-full mt-24 h-56 bg-HeroBanner'>
      <div className='flex flex-end items-end w-4/5 h-full justify-center'>
        <div className='mx-auto'>
            <img src={homeBanner} alt='home-banner' className='w-full' />
        </div>
        <div className='flex text-white bg-yellow-500 justify-center flex-col'>
            <h1>Book Your next event</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
