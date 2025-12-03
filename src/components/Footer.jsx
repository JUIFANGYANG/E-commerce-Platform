import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo} alt="" className='w-32 mb-5'/>
            <p className='w-full md:w-2/3 text-gray-600'>At Forever, we believe great design should be simple, lasting, and effortless.
We create products that match your lifestyle — modern, functional, and made to stay with you for the long run.
Inspired by everyday moments, built with care, and designed to be worn, used, and loved — forever.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <Link to="/">Home</Link>
                <Link to="/about">About us</Link>
                <Link to="/about#privacy">Privacy policy</Link>
            </ul>

        </div>
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@foreveryou.com</li>
            </ul>
        </div>
      </div>
             <div>
                 <hr />
                 <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com-All Right Reserved.</p>
             </div>
    </div>
  )
}

export default Footer

//src={assets.logo}
//Lorem Ipsum is sinply dummy text of the printing and typesetting industry.
//Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of the type and scrambled it yo make a type specimen book.

//COMPANY Home, About us, Delivery, Privacy policy
//GET IN TOUCH +1-212-456-7890

//Copyright 2025@ forever.com-All Right Reserved.


//疑問 
//為何我的p需要w-full md:w-2/3？
//<p className='py-5 text-sm text-center'>Copyright </p>為何他是自動加粗的
