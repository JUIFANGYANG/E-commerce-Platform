import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import ScrollReveal from '../components/ScrollReveal'
import { toast } from 'react-toastify'

const Contact = () => {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='flex flex-col justify-center md:flex-row my-10 gap-10 mb-28'>
        <img className='w-3/4 max-w-[450px] mx-auto *:md:max-w-[450px] md:mx-0' src={assets.contact_img} alt="" />
        <div className='flex flex-col gap-6 justify-center items-start p-10'>
          <p className='font-semibold text-xl text-gray-600'>Our Stroe</p>
          <p className='text-gray-500'>54709 Willms Station <br/> Suite 35, Washington, USA</p>
          <p className='text-gray-500'>Tel:(415)555415555-0132 <br/> Email:admin@forever.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button onClick={()=>{toast.info('Job vacancy is unavailable now. We will update soon!')}} className='border border-black text-black bg-white px-8 py-4 hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
        
      </div>
      <ScrollReveal>
      <NewsletterBox/>
      </ScrollReveal>
      
    </div>
  )
}

export default Contact

//文字換行有問題
//我的按鈕全長變父容器長
//<div className='flex flex-col gap-6  justify-center items-start p-10'>
//為何一但少了items-start我的按鈕就變容器的寬度？ 
