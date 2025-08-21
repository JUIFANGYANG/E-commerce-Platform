import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';



const Navbar = () => {

  const [visible, setVisible]= useState(false);

  const {setShowSearch} = useContext(ShopContext);



  return (
    
    <div className='flex items-center justify-between py-5 font-medium'>
      
      <img src={assets.logo} className='w-36' alt="Forever_logo" /> 
    

      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden ' />
        </NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
          <p>COLLECTION</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden' />
        </NavLink>
        </ul>

        <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} alt="" className='cursor-pointer w-5'/>
            
            <div className='group relative'>
              <img src={assets.profile_icon} alt="" className='cursor-pointer w-5'/>
              <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                 <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-gray-100 text-gray-500'>
                  <p className='cursor-pointer hover:text-black'>My profile</p>
                  <p className='cursor-pointer hover:text-black'>Orders</p>
                  <p className='cursor-pointer hover:text-black'>Logout</p>
                 </div>
              </div>
            </div>

            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="" className='cursor-pointer w-5 min-w-5'/>
            <p className='absolute right-0 bottom-0 w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
            </Link>
            <img onClick={()=> setVisible(true)} src={assets.menu_icon} alt="" className='w-5 cursor-pointer'/>
        </div>
          {/* {Sidebar menu for small screen} */}
          <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' :'w-0'}`} >
            <div className='flex flex-col text-gray-600'>
              <div onClick={()=>setVisible(false)} className='flex items-center gap-5 p-3 cursor-pointer'> 
                <img className='h-4 rotate-180' src={assets.dropdown_icon} alt=""/>
                <p>Back</p>
              </div>
              <div className='flex flex-col p-5'>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border-b' to='/'>Home</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border-b' to='/collection'>Collection</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border-b' to='/about'>About</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border-b' to='/contact'>Contact</NavLink>
              </div>

            </div>

          </div>
    </div>
  )
}

export default Navbar
