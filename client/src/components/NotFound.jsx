import React from 'react'
import  Instagram  from '../assets/instagram_fill.png'
import  Facebook  from '../assets/facebook_fill.png'
import  linkedIn  from '../assets/linkedIn_fill.png'
import NotFoundCanvas from '../assets/notFound.svg'
const NotFound = () => {
  return (
    <div className='w-full my-auto flex justify-center items-center '>
    <div className='flex flex-col items-center gap-8 my-24'>
      <img src={NotFoundCanvas} alt='not found image'/>
      <div className='text-3xl font-bold'>
        Oops!
      </div>
      <div className='text-2xl text-gray-500 font-normal'>
        We can't seem to find the page you are looking for
      </div>
      <div className=' mt-8 text-white font-medium text-xl'>
        <a href='/' className='bg-primary rounded-full px-6 py-2'>
          Back to Homepage
        </a>
      </div>
      <div className='flex flex-col items-center gap-8 mt-8 justify-center'>
        <div className='text-xl font-medium'>
          Follow Us On 
        </div>
        <div className='grid grid-cols-3 gap-8'>
          <div className='bg-purple-100 rounded-2xl p-2'><a href='https://www.instagram.com/yass_sir__/' target='_blank'><img src={Instagram} alt='instagram icon' /></a></div>
          <div className='bg-purple-100 rounded-2xl p-2'><a href='https://yassirimzi.com/' target='_blank'><img src={Facebook} alt='facebook icon' /></a></div>
          <div className='bg-purple-100 rounded-2xl p-2'><a href='https://www.linkedin.com/in/yassir-imzi/' target='_blank'><img src={linkedIn} alt='linkedIn icon' /></a></div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default NotFound
