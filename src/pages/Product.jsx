import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import Collapsible from '../components/Collapsible';
import PageLayout from '../components/PageLayout';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);


  const [productData,setProductData]= useState(false);
  const [image,setImage] = useState('');
  const [size, setSize] = useState('');


  const fetchProductData = async () => {

    products.map((item)=>{
      if (item._id === productId) {
         setProductData(item)
         setImage(item.image[0])
         return null;
      }
    }
    )
  }
  
  useEffect(()=>{
    fetchProductData();
  },[productId, products])

  return productData ? (
    <PageLayout>
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      
      {/* ----Product Data------ */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
           
           {/* -------Product Images-------- */}
           <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                  <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                  {
                    productData.image.map((item,index)=>(
                      <img onClick={()=> setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0' alt="" />
                    ))
                  }
                  </div>
                  <div className='w-full sm:w-[80%]'>
                    <img className='w-full h-auto' src={image} alt="" />
                  </div>
           </div>
           {/* --------Product Information----- */}
           < div className='flex-1'>
                  <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
                    <div className='flex items-center gap-2 mt-2'>
                      <img src={assets.star_icon} alt="" className='w-3 5'/>
                      <img src={assets.star_icon} alt="" className='w-3 5'/>
                      <img src={assets.star_icon} alt="" className='w-3 5'/>
                      <img src={assets.star_icon} alt="" className='w-3 5'/>
                      <img src={assets.star_dull_icon} alt="" className='w-3 5'/>
                      <p className='pl-2'>(122)</p>
                    </div>
                    <p className='mt-5 text-3xl'>{currency}{productData.price}</p>
                    <p className='mt-5 text-gray-700 font-light md:w-4/5'>{productData.description}</p>
                    <div className='flex flex-col gap-4 my-8'>
                        <p className='font-bold'>Select Size</p>
                              <div className='flex gap-2'>
                                {productData.sizes.map((item,index)=>(
                                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ?'border-orange-500':''}`} key={index}>{item}</button>
                                ))}
                              </div>
                    </div>
                    <button onClick={() => addToCart(productData._id, size)} className='bg-black text-white py-3 px-8 text-sm active:bg-gray-700'>ADD TO CART</button>
                  
                    <div className='text-sm mt-5 text-gray-700 font-light flex flex-col gap-1'>
                          <p>100% Original product.</p>
                          <p>Cash on delivery is available on this product.</p>
                          <p>Easy return and exchange policy within 7 days.</p>
                    </div>
           </div>
      </div>
       {/* --------Description & Shipping & Exchanges---------*/}
       <div className='my-10 flex flex-col gap-4'>
              <Collapsible title={'Description'} initialOpen={true}>
                 <p>Designed for everyday comfort and timeless style, this piece is made to move with you through every moment of your day. Crafted with carefully selected materials, it offers a soft feel, reliable durability, and a clean, versatile look that fits effortlessly into any lifestyle.</p>
                 <p>Whether worn daily or saved for special moments, this item reflects our commitment to quality, simplicity, and thoughtful design that lasts beyond trends.</p>
              </Collapsible>

              <Collapsible title={'Material & Features'}>
                  <p>Made from carefully selected, high-quality fabrics, this garment offers a soft touch with breathable comfort for all-day wear. The material is designed to maintain its shape while allowing natural movement, making it suitable for both casual and refined looks. Thoughtful details and clean construction enhance durability and wearability, ensuring this piece feels comfortable, reliable, and timeless through repeated use.</p>
              </Collapsible>
              
              <Collapsible title={'Shipping & Exchanges'}>
                 <p>We offer free shipping and exchanges on all U.S. orders over $250 and international orders over $280—because your shoe care products should arrive hassle-free. If your order isn’t quite right, returns and exchanges are easy.</p>
                 <p>Just ensure your items are:<br/>• Unused, undamaged, and in re-sellable condition <br/>• In their original packaging<br/>• Returned within 30 days of delivery</p>
              </Collapsible>

        </div>
        {/* ----------Display Related Product------------- */}
        <div className='mt-20'>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
        </div>
    </div>
    </PageLayout>
  ): <div className='opacity-0'></div>
  
}

export default Product
