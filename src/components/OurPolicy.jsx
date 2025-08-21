import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-base text-gray-700'>
        <div>
            <img className='w-12 m-auto mb-5'src={assets.exchange_icon} alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5'src={assets.quality_icon} alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5'src={assets.support_img} alt="" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
    
    </div>
  )
}

export default OurPolicy


//第二層div不用再flex-col了因為他們是區塊元素會自動分行？
//為何img 要m-auto
//如下自己寫的

{/* <div className='flex flex-col sm:flex-row justify-between'>
<div className='flex flex-col py-5 items-center mt-10'>
    <img className='w-8 mb-5'src={assets.exchange_icon} alt="" />
    <p className='font-medium'>Easy Exchange Policy</p>
    <p className='text-gray-600'>We offer hassle free exchange policy.</p>
</div>
<div className='flex flex-col py-5 items-center mt-10'>
    <img className='w-8 mb-5'src={assets.exchange_icon} alt="" />
    <p className='font-medium'>Easy Exchange Policy</p>
    <p className='text-gray-600'>We offer hassle free exchange policy.</p>
</div>
<div className='flex flex-col py-5 items-center mt-10'>
    <img className='w-8 mb-5'src={assets.exchange_icon} alt="" />
    <p className='font-medium'>Easy Exchange Policy</p>
    <p className='text-gray-600'>We offer hassle free exchange policy.</p>
</div>

</div> */}