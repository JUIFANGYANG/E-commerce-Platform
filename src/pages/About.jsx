import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import ScrollReveal from '../components/ScrollReveal'

const About = () => {

  const ABOUT_CONTENT = {
    paragraph1: "At Forever, we believe that the things you use every day should bring you comfort, confidence, and a quiet sense of joy. Founded with the idea that quality should never be complicated, our brand focuses on creating timeless pieces designed to last — in style, in durability, and in meaning.",
    paragraph2: "Forever was built from a simple vision: to offer thoughtfully crafted essentials that elevate everyday living. We pay attention to the details that matter — the feel of the fabric, the balance of design, the practicality of each feature. ",
    mission: "Our mission is to create products that stand the test of time — in purpose, in quality, and in design. At Forever, we aim to simplify your everyday choices by delivering pieces you can trust: versatile, timeless, and made with care. We believe that great design should elevate life without adding complexity."
};

  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      
      <div className='my-8 flex flex-col md:flex-row gap-16'>
        <div className='flex flex-1 mx-auto max-w-[350px] md:mx-0 overflow-hidden'>
          <img className='w-full h-full object-cover'
               src={assets.about_img} 
               alt="About us" />
        </div>

        <div className='flex flex-col flex-1 justify-center gap-6  text-gray-600 p-5'>
          <p className='font-light'>{ABOUT_CONTENT.paragraph1}</p>
          <p className='font-light'>{ABOUT_CONTENT.paragraph2}</p>
           <h3 className='text-gray-800 font-semibold'>Our Mission</h3>
           <p className='font-light'>{ABOUT_CONTENT.mission}</p>
        </div>
      </div>

      <ScrollReveal>
      <div className='text-xl text-center mt-20'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      </ScrollReveal>

      <div className='w-full flex flex-col md:flex-row mt-10 justify-start p-3'>
      <ScrollReveal delay={0.1}>
        <div className='text-gray-600 border border-gray-200 px-10 py-12 flex flex-col gap-2 text-sm'>
          <b>Quality Assurance:</b>
          <p>Every piece is crafted with care and tested for durability, ensuring long-lasting quality you can trust in every use.</p>
        </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
        <div className='text-gray-600 border border-gray-200 px-10 py-12 flex flex-col gap-2 text-sm'>
          <b>Convenience:</b>
          <p>Effortless shopping with fast delivery, simple navigation, and smooth checkout—made to fit seamlessly into your everyday life.</p>
        </div>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
        <div className='text-gray-600 border border-gray-200 px-10 py-12 flex flex-col gap-2 text-sm'>
          <b>Exceptional Customer Service:</b>
          <p>Our support team is here to help with care, clarity, and quick responses, ensuring your experience is always smooth and stress-free.</p>
        </div>
        </ScrollReveal>
      </div>

      <div>

      <ScrollReveal>
      <NewsletterBox/>
      </ScrollReveal>

      </div>
      
      <ScrollReveal>
      <div id="privacy" className='text-2xl text-center mt-20 pt-10'>
        <Title text1={'PRIVACY'} text2={'POLICY'}/>
      </div>
      <div className='flex flex-col w-full text-center gap-5 py-5 mb-10 text-sm text-gray-600 p-5'>
        <p>At Forever, we value your privacy and are committed to protecting your personal information. We collect essential data such as your name, contact details, and order information only to process purchases, provide customer support, and improve your shopping experience. Payment details are handled securely through trusted third-party providers, and we never store full credit card information.</p>
        <p>We may use cookies to enhance website performance and personalize your experience. Your data is never sold and is shared only with partners necessary for payment, shipping, or security. By using our site, you agree to this policy.</p>
      </div>
      </ScrollReveal>
      
    </div>
  )
}

export default About

