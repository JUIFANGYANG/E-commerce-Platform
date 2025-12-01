import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const {products, currency, cartItems, setCartItems} = useContext(ShopContext);

  return (
    <div>
      {/* Title */}
      <div className='text-2xl mt-5'><Title text1={'MY'} text2={'ORDERS'}/></div>

      {/* Product list */}
      <div>

        {/* Product information */}
        <div>
          {
            // products.slice(1,4).map((item, index)=>{
            //   return (
            //     <div key={index} className='py-4 flex border-t-2 border-b-2 border-gray-200'>
            //      <div>
            //       <img src={item.image[0]} alt="" className='w-20 mt-2 mb-2'/>
            //       <div className='flex flex-col justify-evenly px-5 py-1'>
            //         <p className='text-sm font-medium'>{item.name}</p>
            //           <div className='flex gap-3'>
            //             <p>{currency}{item.price}</p>
            //             <p>Quantity:1</p>
            //             <p>Size:M</p>
            //           </div>
            //           <p>Date: 14th, Nov 2025</p>
            //       </div>
            //       </div>

            //       {/* Product shipping status */}
                
            //       <div className='md:w-1/2 flex justify-between'>
            //       <div className='flex items-center gap-2'>
            //       <p className='min-w-2 h-2 rounded-full bg-green-300'></p>
            //       <p className='text-sm md:text-base'>Ready to ship</p>
            //       </div>
            //       <button className='border px-4 py-2 text-small font-medium rounded-sm'>Track Order</button>
            //       </div>
                
                  
            //     </div>
            //   )
            // })

            // 官方寫下如下
            products.slice(1,4).map((item,index) => (
              <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                {/* 商品列表左邊資訊 */}
                <div className='flex items-start gap-6 text-sm'>
                  <img className='w-16 sm:w-20'src={item.image[0]} alt="" />
                     <div>
                      <p className='sm:text-base font-medium'>{item.name}</p>
                      <div className='flex items-center gap-3 mt-2 text-base text-gray-500'>
                        <p className='text-lg'>{currency}{item.price}</p>
                        <p>Quantity</p>
                        <p>Size:M</p>
                      </div>
                      <p className='mt-2'>Date: <span className='text-gray-400'>25, Jui, 2025</span></p>
                     </div>
                </div>
                {/* 商品列表右邊出貨狀態 */}
                <div className='md:w-1/2 flex justify-between'>
                    <div className='flex items-center gap-2'>
                        <p className='min-w-2 h-2 rounded-full bg-green-400'></p>
                        <p className='text-sm md:text-base'>Ready to ship</p>
                    </div>
                    <button className='px-4 py-2 border text-sm font-medium rounded-sm'>Track Order</button>
  
                </div>

              </div>
            
            ))
          }
        </div>


        


      </div>
      
    </div>
  )
}

export default Orders
