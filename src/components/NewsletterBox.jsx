import React from 'react'
import { toast } from 'react-toastify';

const NewsletterBox = () => {

    const onSubmitHandler = (event) =>{
       event.preventDefault();
    }

  return (
    <div className='text-center my-20'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
      <p className='text-gray-400 mt-3'>Forever — Made to Elevate Your Everyday. Quality you can feel, style you can trust.</p>
      
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'action="" placeholder='Enter your email'>
        <input className='w-full sm:flex-1 outline-none' type="email"placeholder='Enter your Email'/>
        <button onClick={()=>{toast.success('thank you for your subscription.')}} type='submit' className='bg-black text-white text-sm px-10 py-4'>SUBSCRIBE</button>
      </form>
    
    </div>
  )
}

export default NewsletterBox

//為何是用w-full配上w-1/2
//可以複習下 const onSubmitHandler = (event) =>{event.preventDefault();}//
//border放在form才會將兩個元素一起包在一起