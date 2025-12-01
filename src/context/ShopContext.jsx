import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

    const addToCart = async (itemId, size) => {

        if(!size) {
            toast.error('Select Product Size');
            return;
        }

       let cartData = structuredClone(cartItems);
       
       //如果項目不對齊，直接設數量1，如果項目跟尺寸對齊，原先數量加一。如果項目對尺寸不對齊，數量等於一//

       if(cartData[itemId]){
           if (cartData[itemId][size]){
               cartData[itemId][size] += 1;
          }
          else {
            cartData[itemId][size] = 1;
          }
       }
       else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
       }
       setCartItems(cartData);
       

    }

    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for (const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0) {
                        totalCount += cartItems[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

    useEffect(()=>{
        
    },[cartItems])

    //更改數量
    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);
        
        cartData[itemId][size] = quantity;

        setCartItems(cartData);
        
    }
    
    const getCartAmount = () => {

        let totalAmount = 0;

        for (const items in cartItems){
            let itemInfo = products.find((products)=>products._id === items);
            for (const item in cartItems[items]) {
               try {
                if (cartItems[items][item] >0 ) {
                    totalAmount += itemInfo.price * cartItems[items][item];
                }
               }  catch (error) {}
            }
        }
        return totalAmount;
    }

    const navigate = useNavigate();

    const value = {
        products, currency, delivery_fee,
        search,setSearch,showSearch,setShowSearch,
        cartItems, setCartItems, addToCart,
        getCartCount, updateQuantity, getCartAmount, navigate
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;