import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {

    const { products } = useContext(ShopContext);
    const [showFilter,setShowFilter] = useState(false);
    const [filterProducts,setFilterProducts]= useState([]);
    const [category, setCategory] = useState([]);
    const [subCategory, setSubcategory] = useState([]);
    const [sortType, setSortType] = useState('relavent')

    const toggleCategory = (e) => {

      if (category.includes(e.target.value)) {
        setCategory(prev => prev.filter(item => item !== e.target.value))
      }
      else {
        setCategory(prev => [...prev, e.target.value])
      }
    };

    const toggleSubcategory = (e) =>{
      if (category.includes(e.target.value)) {
        setCategory(prev =>prev.filter(item => item !== e.target.value))
      }
      else {
        setCategory(prev => [...prev, e.target.value])
      }
    }

    const applyFilter = () => {
      let productsCopy = products.slice();

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
          setFilterProducts(fpcopy.sort((a,b)=>(b.price - a.price)));
          break;

          default:
            applyFilter();
            break;
      }
    }

    useEffect(()=>{
      setFilterProducts(products)
    },[])

    useEffect(() => {
      applyFilter();
    },[category,subCategory])

    useEffect(()=>{
      sortProduct()
    },[sortType])
   

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* fliter options */}
      <div className='min-w-60'>
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
         <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
         </p>
        {/* CATEGORIES */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES </p>
               <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/>Men
                  </p>
                  <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/>Women
                  </p>
                  <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory}/>Kids
                  </p>
               </div>
        </div>

        {/* subcategory filter */}
         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>TYPE</p>
               <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                 <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubcategory}/>Topwear
                  </p>
                  <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubcategory}/>Bottomwear
                  </p>
                  <p className='flex gap-2'>
                  <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubcategory}/>Winterwear
                  </p>
               </div>
        </div>
      
      </div>

      {/* Right side */}
       <div className='flex-1'>

          <div className='relative flex justify-between text-base sm:text-2xl mb-4'>
             <Title text1={'ALL'} text2={'COLLECTION'}/>
             {/* Product sort */}
             <select onChange={(e=>setSortType(e.target.value))} className='text-sm border-2 border-gray-300 px-4 py-1 rounded-none appearance-none'>
              <option value="relative">Sort by: Relavent</option> 
              <option value="low-high">Sort by: low to high</option>
              <option value="high-low">Sort by: high to low</option>
             
             </select>
             {/* 自訂箭頭 */}
             <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs">
              ▼
             </span>
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

//usestate(true/false)跟usestate([empty array])這兩個用法差別在哪，使用情境為何
//flex-1? = css的 flex: 1 1 0% 佔滿剩餘空間 可縮可長
//min-w-60約等於240px怎換算
//filter 的gap-2意義？
//為何加了flex後gap-2才有反應？
//為何他沒有特地分比例？
//三元運算子？but usestate(false) ${showFilter ? '':'hidden'} sm:block`

//篩選器怎麼寫：
//usestate
// //這個可以再測試一次  useEffect(()=>{
//       console.log(subCategory);
//     },[subCategory])

//為何要togglecategory先整理好陣列之後，再用applyFilter來重新調整真的渲染畫面