import React, { useContext, useEffect, useState } from 'react'
import { assets, products } from '../assets/assets'
import { ShopContext } from '../context/ShopContext';
import { Link} from 'react-router-dom';


const SideCart = ({closeCart}) => {

  const {products, currency, cartItems, getCartCount, updateQuantity, getCartAmount, cartData} = useContext(ShopContext);
  
      

  return (
    
    <div className='flex flex-col h-full p-4'>
            <div className='inline-flex justify-between p-5'><p className=''>{getCartCount()} item(s)</p>
                 <img onClick={closeCart} 
                      className='h-4 mt-1 cursor-pointer' 
                      src={assets.cross_icon} 
                      alt="Close Cart" />
            </div>


            {cartData.length === 0 ? (
              <div className='flex flex-col w-full h-full justify-between'>
                <div className='flex flex-col gap-4'>
                <p className='text-4xl px-4 text-gray-900'>Your cart</p>
                <p className='text-base p-5 font-light'>Your cart is currently empty.</p>
                </div>
                <button onClick={closeCart} 
                        className='bg-black font-light text-white w-full py-5 '>Continue shopping</button>
              </div>
            
            ) : (

              <>

            <div className='flex flex-col flex-grow overflow-y-auto'>

             <p className='text-4xl px-4 text-gray-900 my-2'>Your cart</p>

            {
              cartData.map((item, index) => {

              const productData = products.find((products) => products._id === item._id);
            
              return (
                
                <div key={index} className='flex flex-col h-full gap-2 p-2'>
                  <div className='flex flex-row gap-2 my-5'>
                    <img className='w-32 lg:w-36 mx-2 ' src={productData.image[0]} alt="" />
                    <div className='flex flex-col flex-grow justify-between'>
                      <div className='flex w-full justify-between'>
                          <p className='text-sm pr-2'>{productData.name}</p>
                          <p className='text-sm'>{currency}{productData.price}</p>
                      </div>
                      <div className='flex justify-between'>
                        <div className='flex items-center gap-3'>
                          <p onClick={()=>{
                             if (item.quantity >1 ) {
                                 updateQuantity(item._id, item.size, item.quantity - 1);
                             } else {
                                updateQuantity(item._id, item.size, 0);
                            }
                            }}  
                             className='font-light cursor-pointer'>-</p>
                          <p className='font-light'>{item.quantity}</p>
                          <p onClick={()=>{
                               updateQuantity(item._id, item.size, item.quantity + 1);
                             }}
                             className='font-light cursor-pointer'>+</p>
                        </div>
                        <p onClick={() => {updateQuantity(item._id, item.size, 0)}}
                           className='cursor-pointer font-light underline text-sm'>Remove</p>
                      </div>                  
                    </div>
                  </div>

                  
                </div>
              )
            })

            } 
            </div>

            <div className='flex flex-col'>
                       <div className='flex justify-between'>
                         <p className='text-xl px-2 my-2'>Subtotal</p>
                         <p className='text-base px-2 my-2'>{currency} {getCartAmount()}.00</p>
                       </div>
                       <Link to="/cart"><button onClick={closeCart} className='w-full bg-black font-light text-white py-5'>Checkout</button>
                       </Link>
                 </div>

                 </>

            )} 
           
    </div>
    

  )
}

export default SideCart;
