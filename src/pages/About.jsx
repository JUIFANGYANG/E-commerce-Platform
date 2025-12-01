import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]'src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>At Forever, we believe that the things you use every day should bring you comfort, confidence, and a quiet sense of joy. Founded with the idea that quality should never be complicated, our brand focuses on creating timeless pieces designed to last — in style, in durability, and in meaning.</p>
          <p>Forever was built from a simple vision: to offer thoughtfully crafted essentials that elevate everyday living. We pay attention to the details that matter — the feel of the fabric, the balance of design, the practicality of each feature. Each item we create is made with intention, combining modern aesthetics with long-lasting functionality.</p>
          <p>We understand that in a world full of fast trends, people crave pieces that feel personal, reliable, and grounded. That’s why our collections are guided by simplicity, versatility, and a commitment to durability. Whether it’s a daily essential or a seasonal favorite, our products are meant to blend seamlessly into your life — supporting your routines, inspiring your style, and growing with you over time.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to create products that stand the test of time — in purpose, in quality, and in design.

At Forever, we aim to simplify your everyday choices by delivering pieces you can trust: versatile, timeless, and made with care. We believe that great design should elevate life without adding complexity. Through intentional creation and consistent quality, our mission is to provide items that feel good today and remain meaningful for years to come.</p>
        </div>
      </div>

      <div className='text-xl text-center mt-20'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='w-full flex flex-col md:flex-row my-20 mt-10 justify-start'>
        <div className='text-gray-600 border border-gray-200 px-10 py-12 flex flex-col gap-2 text-sm'>
          <b>Quality Assurance:</b>
          <p>Every piece is crafted with care and tested for durability, ensuring long-lasting quality you can trust in every use.</p>
        </div>
        <div className='text-gray-600 border border-gray-200 px-10 py-12 flex flex-col gap-2 text-sm'>
          <b>Convenience:</b>
          <p>Effortless shopping with fast delivery, simple navigation, and smooth checkout—made to fit seamlessly into your everyday life.</p>
        </div>
        <div className='text-gray-600 border border-gray-200 px-10 py-12 flex flex-col gap-2 text-sm'>
          <b>Exceptional Customer Service:</b>
          <p>Our support team is here to help with care, clarity, and quick responses, ensuring your experience is always smooth and stress-free.</p>
        </div>
      </div>
      
      <NewsletterBox/>
      
    </div>
  )
}

export default About

