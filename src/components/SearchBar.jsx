import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search, setSearch, showSearch, setShowSearch} = useContext(ShopContext);
    const [visible, setVisible] = useState(false)
    const location = useLocation();

    useEffect(()=>{
        if (location.pathname.includes('collection') ) {
            setVisible(true);
        }
        else {
            setVisible(false)
        }
    },[location])
  
    return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center jusify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='search'/>
        <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
    
  ):null
}

export default SearchBar

//inline-flex 作用？ inline行內元素原先會自己換行 但加了inline-flex之後則是排在同一行＋內部可以使用flex屬性如items-center, justify-center
//outline:none? 瀏覽器預設input會顯示外框，該效果讓它移除，畫面乾淨
//showSearch ?():null 條件式？true:false
//onclick & onchange使用時機差異
//onChange用在表單元素，當輸入或值改變時執行，即時更新state，例如input，onClick用在任何元素，被點擊時使用。
// showsearch?():null
