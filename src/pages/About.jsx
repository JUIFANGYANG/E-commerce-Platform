import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import ScrollReveal from '../components/ScrollReveal'
import PageLayout from '../components/PageLayout'

const About = () => {

  const ABOUT_CONTENT = {
    paragraph1: "At Forever, we believe that the things you use every day should bring you comfort, confidence, and a quiet sense of joy. Founded with the idea that quality should never be complicated, our brand focuses on creating timeless pieces designed to last — in style, in durability, and in meaning.",
    paragraph2: "Forever was built from a simple vision: to offer thoughtfully crafted essentials that elevate everyday living. We pay attention to the details that matter — the feel of the fabric, the balance of design, the practicality of each feature. ",
    mission: "Our mission is to create products that stand the test of time — in purpose, in quality, and in design. At Forever, we aim to simplify your everyday choices by delivering pieces you can trust: versatile, timeless, and made with care. We believe that great design should elevate life without adding complexity."
};

  return (
    <div>

      <div className='text-left pt-8 border-t md:mb-20 mb-12 px-5 '>
        <p className='text-4xl md:text-5xl'>Our Story</p>
      </div>

      
   <div className='grid grid-cols-1 md:grid-cols-2'>

    {/* Our Story */}
     <div className='flex flex-col gap-2 mb-20'>
        <img 
            src={assets.about_img01} 
            className='w-full h-[450px] object-cover' // 建議加上高度與 object-cover
            alt="Our Story" 
        />
        <div className='flex flex-col gap-1 p-4'>
            <p className='text-sm font-semibold'>About Us</p>
            <p className='text-sm text-gray-600'>At Forever we make elevated footwear using modern techniques coupled with old-school materials, then offer them to you, minus the markups.</p>
        </div>
     </div> 

    {/* Fair Pricing */}
     <div className='flex flex-col gap-2 mb-20'>
        <img 
            src={assets.about_img02} 
            className='w-full h-[450px] object-cover' 
            alt="Fair Pricing" 
        />
        <div className='flex flex-col gap-1 p-4'>
            <p className='text-sm font-semibold'>Fair Pricing</p>
            <p className='text-sm text-gray-600'>Major brands in our industry markup their products 8-10x the actual cost. We do things differently. To make quality accessible, we've built relationships with the best manufacturers and sell directly to you.</p>
        </div>
     </div>

   </div>
      
    <div className='grid grid-cols-1 md:grid-cols-2'>

    {/* Our Materials */}
     <div className='flex flex-col gap-2 mb-20'>
        <img 
            src={assets.about_img04} 
            className='w-full h-[450px] object-cover'
            alt="Our Story" 
        />
        <div className='flex flex-col gap-1 p-4'>
            <p className='text-sm font-semibold'>Our Materials</p>
            <p className='text-sm text-gray-600'>We only work with high-quality, enduring materials, from custom outsoles to ethically sourced Italian leathers. Our cloth are made for everyday wear, forever.</p>
        </div>
     </div> 

    {/* Unusual Suspect */}
     <div className='flex flex-col gap-2 mb-20'>
        <img 
            src={assets.about_img03} 
            className='w-full h-[450px] object-cover' 
            alt="Fair Pricing" 
        />
        <div className='flex flex-col gap-1 p-4'>
            <p className='text-sm font-semibold'>Fair Pricing</p>
            <p className='text-sm text-gray-600'>In 2018, a then 29-year-old Scott Gabrielson left his job at a non-profit and moved to England to start a business. With no fashion, retail, or start-up experience, Scott relied on his passion for balanced design and quality, comfortable footwear to launch Forever.</p>
        </div>
     </div>

   </div>
      

    

      <ScrollReveal>
      <div className='text-left pt-8 mb-5 md:mb-10 px-5 '>
        <p className='text-4xl md:text-5xl'>Why Choose Us</p>
      </div>
      </ScrollReveal>

      <div className='w-full flex flex-col md:flex-row mt-10 justify-start p-3'>
      <ScrollReveal delay={0.1}>
        <div className='text-gray-600 border-r px-10 py-12 flex flex-col gap-2 text-sm'>
          <b>Quality Assurance:</b>
          <p>Every piece is crafted with care and tested for durability, ensuring long-lasting quality you can trust in every use.</p>
        </div>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
        <div className='text-gray-600 border-r px-10 py-12 flex flex-col gap-2 text-sm'>
          <b>Convenience:</b>
          <p>Effortless shopping with fast delivery, simple navigation, and smooth checkout—made to fit seamlessly into your everyday life.</p>
        </div>
        </ScrollReveal>
        <ScrollReveal delay={0.5}>
        <div className='text-gray-600  px-10 py-12 flex flex-col gap-2 text-sm'>
          <b>Exceptional Customer Service:</b>
          <p>Our support team is here to help with care, clarity, and quick responses, ensuring your experience is always smooth and stress-free.</p>
        </div>
        </ScrollReveal>
      </div>
      
   <PageLayout>
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
  </PageLayout>
      
    </div>
  )
}

export default About

