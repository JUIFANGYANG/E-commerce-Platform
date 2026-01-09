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


 {/* {Hero left side} */}
      {/* <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'> 
            <div className='text-[#414141]'>
               <div className='flex items-center gap-2'>
                 <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                 <p className='font-medium text-sm me:text-base'>OUR BESTSELLERS</p>
               </div>
            
            <h1 className='prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'>
                <p className='font-semibold text-sm me:text-base'>SHOP NOW</p>
                <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
                </div>
            </div>
      </div> */}