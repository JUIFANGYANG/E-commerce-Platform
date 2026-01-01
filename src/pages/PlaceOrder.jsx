import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import PageLayout from '../components/PageLayout'

const PlaceOrder = () => {

  const [method,setMethod] = useState('cod');

  const {navigate} = useContext(ShopContext);

  return (
   
    <PageLayout>

    <div className='flex flex-col sm:flex-row gap-10 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* Delivery information (left side)*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[50%]'>
        <div className='text-2xl'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-1'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last name'/>
        </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Email address' />
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Streets' />
        <div className='flex gap-1'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className='flex gap-1'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City Zipcode'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
          <div className='flex gap-1'>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
        </div>
          <input className='border border-gray-300 mt-2 px-2 py-1' type="number" placeholder='Phone'/>
      </div>

      {/* Right Side TotalAmount and Payment */}
      <div className='flex flex-col w-full flex-1 sm:max-w-[480px] ml-auto'>
          <div>
           <CartTotal/>
          </div>

        {/* ------Payment Method-------- */}
        <div className='mt-12'>
        <Title className='text-sm' text1={'PAYMENT'} text2={'METHOD'}/>

        {/* ------Payment Method Selection-------- */}
        <div className='flex flex-col gap-3'>
          <div className='flex items-center gap-3 border border-gray-300 p-2 cursor-pointer '>
            <p onClick={()=> setMethod('stripe')} className={`min-w-3.5 h-3.5 border rounded-full ml-2 ${method === 'stripe' ? 'bg-green-400':'' }`}></p>
            <img className='h-5 mx-4'src={assets.stripe_logo} alt="" />
          </div>
          <div className='border border-gray-300 p-2 flex items-center gap-3'>
            <p onClick={()=> setMethod('razorpay')} className={`min-w-3.5 h-3.5 border rounded-full ml-2 ${method === 'razorpay' ? 'bg-green-400':''}`}></p>
            <img className='h-5 mx-4'src={assets.razorpay_logo} alt="" />
          </div>
          <div className='border border-gray-300 p-2 flex items-center gap-3'>
            <p onClick={()=> setMethod('cod')} className={`min-w-3.5 h-3.5 border rounded-full ml-2 ${ method === 'cod' ? 'bg-green-300':''}`}></p>
            <p className='text-gray-500 text-sm font-medium mx-3'>CASH ON DELIVERY</p>
          </div>
        </div>

        <div className='mt-8 text-end w-full bg-green'>
          <button onClick={()=> navigate('/orders')} className='bg-black text-white text-center cursor-pointer text-sm px-16 py-3'>PLACE ORDER</button>
        </div>

        </div>
      </div>
    </div>
    </PageLayout>
  )
}

export default PlaceOrder
