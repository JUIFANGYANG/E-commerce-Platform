import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

    const { products, search, showSearch } = useContext(ShopContext);
    const [showFilter,setShowFilter] = useState(false);
    const [filterProducts,setFilterProducts]= useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);
    const [sortType, setSortType] = useState('relavent')

    const toggleCategory = (e) => {

      if (category.includes(e.target.value)) {
        setCategory(prev => prev.filter(item => item !== e.target.value))
      }
      else {
        setCategory(prev => [...prev, e.target.value])
      }
    };

    const toggleSubCategory = (e) =>{
      if (subCategory.includes(e.target.value)) {
        setSubCategory(prev =>prev.filter(item => item !== e.target.value))
      }
      else {
        setSubCategory(prev => [...prev, e.target.value])
      }
    }

    const applyFilter = () => {

      let productsCopy = products.slice();

      if (showSearch && search) {
        productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
      }

      if (category.length > 0) {
        productsCopy = productsCopy.filter(item => category.includes(item.category));
      }
      if (subCategory.length > 0) {
        productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
      }

      setFilterProducts(productsCopy)
    }

    const sortProduct = () =>{

        let fpCopy = filterProducts.slice();
        switch(sortType){
          case 'low-high':
          setFilterProducts(fpCopy.sort((a,b)=>(a.price - b.price)));
          break;

          case'high-low':
          setFilterProducts(fpCopy.sort((a,b)=>(b.price - a.price)));
          break;

          default:
            applyFilter();
            break;
      }
    }

    useEffect(()=>{
      setFilterProducts(products)
    },[])

    useEffect(()=>{
      applyFilter();
    },[category,subCategory,search,showSearch])

    useEffect(()=>{
      sortProduct()
    },[sortType])
   

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      
      {/* fliter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
         <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
         </p>
        {/* CATEGORIES */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES </p>
               <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                 <label className='flex gap-2'>
                  <input className='w-3 cursor-pointer' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
                  </label>
                  <label className='flex gap-2'>
                  <input className='w-3 cursor-pointer' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
                  </label>
                  <label className='flex gap-2'>
                  <input className='w-3 cursor-pointer' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
                  </label>
               </div>
        </div>

        {/* subcategory filter */}
         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
               <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                  <label className='flex gap-2'>
                  <input className='w-3 cursor-pointer' type="checkbox" value={'Topwear'} onChange={toggleSubCategory}/>Topwear
                  </label>
                  <label className='flex gap-2'>
                  <input className='w-3 cursor-pointer' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/>Bottomwear
                  </label>
                  <label className='flex gap-2'>
                  <input className='w-3 cursor-pointer' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/>Winterwear
                  </label>
               </div>
        </div>
      
      </div>

      {/* Right side */}
       <div className='flex-1'>

          <div className='relative flex justify-between mb-4 gap-2'>
            <div className='text-base md:text-2xl'> 
              <Title text1={'ALL'} text2={'COLLECTION'}/>
            </div>
            <div className='relative flex items-center'>
             {/* Product sort */}
             <select onChange={(e=>setSortType(e.target.value))} className='cursor-pointer text-sm underline underline-offset-4 sm:h-auto sm:w-auto pr-6 pl-2 py-2 appearance-none'>
              <option value="relative">Sort by: Relavent</option> 
              <option value="low-high">Sort by: low to high</option>
              <option value="high-low">Sort by: high to low</option>
             
             </select>
             {/* 自訂箭頭 */}
             <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs">
              ▼
             </span>
             </div>
          </div>

          {/* Map products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {
            filterProducts.map((items,index)=>(
              <ProductItem key={index} name={items.name} id={items._id} price={items.price} image={items.image}/>
            ))
          }
          </div>



        </div>
     

    </div>
  )
}

export default Collection

