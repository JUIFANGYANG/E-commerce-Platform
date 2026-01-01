import React from 'react'
import { assets } from '../assets/assets'
import ScrollReveal from '../components/ScrollReveal'
import {motion} from 'framer-motion'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-base text-gray-700 my-16'>
        <ScrollReveal delay={0.1}>
        <div>
            <img className='w-12 m-auto mb-5'src={assets.exchange_icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
        <div>
            <img className='w-12 m-auto mb-5'src={assets.quality_icon} alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
        <div>
            <img className='w-12 m-auto mb-5'src={assets.support_img} alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
        </ScrollReveal>


        
    
    </div>
  )
}

export default OurPolicy


