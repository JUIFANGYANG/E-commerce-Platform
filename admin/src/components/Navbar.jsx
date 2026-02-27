import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {

  const logout = () =>{
    setToken("");
    localStorage.removeItem('token');
  }

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
        <img className="w-[max(10%,80px)]" src={assets.logo} alt="" />
        <button onClick={()=>{logout()}} className='border rounded-full bg-gray-600 py-2 px-5 sm:px-7 sm:py-2'>Logout</button>
    </div>

  )
}

export default Navbar
