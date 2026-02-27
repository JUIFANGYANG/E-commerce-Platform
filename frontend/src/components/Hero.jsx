import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='w-full h-[400px] sm:h-[80vh] overflow-hidden relative'>
     
      {/* {Hero right side} */}
  
      <img 
      className='w-full h-full object-cover' 
      src={assets.hero_update_img} 
      alt="Hero Banner" 
      />
      <div className='absolute left-0 bottom-0 flex flex-col items-end py-10 px-8 gap-2 mb-2'>
        <p className='font-thin text-white text-xl md:text-4xl'>Latest Arrivals</p>
        <Link to='/collection'><p className='font-light text-sm underline underline-offset-2 text-white '>SHOP NOW</p>
        </Link>
      </div>

    </div>
  )
}

export default Hero


