import React, { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import SideCart from './components/SideCart'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShopContextProvider from './context/ShopContext';


const App = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const closeCart = () => setCartVisible(false);
  

  return (
    <ShopContextProvider setCartVisible={setCartVisible}>
        {cartVisible && (
        <div onClick={closeCart} className='fixed inset-0 bg-black/40 backdrop-blur-sm z-50'></div>
        )}
        <div className={`fixed bg-white right-0 top-0 bottom-0 z-[60] transition-all duration-300 w-full sm:w-2/5 ${cartVisible? 'translate-x-0':'translate-x-full'}`}>
        <SideCart closeCart={closeCart}/>
      </div>
      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <ToastContainer/>
        <Navbar
          cartVisible={cartVisible}
          setCartVisible={setCartVisible}
          closeCart={closeCart}/>
        <SearchBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/collection" element={<Collection/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/product/:productId" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/place-order" element={<PlaceOrder/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
        <Footer/>
    </div>
    </ShopContextProvider>
  )
}

export default App
