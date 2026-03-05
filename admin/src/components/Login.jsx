import React, { useState } from "react";
import axios from 'axios'
import { backendUrl } from "../App";
import {toast} from 'react-toastify';

const Login = ({setToken}) => {

  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')

const fillTestAccount = () => {
  setEmail('admin@forever.com'); // 替換成你的測試帳號
  setPassword('qwerty123');        // 替換成你的測試密碼
};

  const onSubmitHandler = async (e) => {

    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + '/api/user/admin', {email,password})

      if (response.data.success) {
        setToken(response.data.token)
        toast.success("登入成功！")
        localStorage.setItem("token", response.data.token)

      } else{
        toast.error(response.data.message)
      }

    } catch (error) {

      console.log(error);
      const errorMsg = error.response?.data?.message || "Network connection error, please try again later";
      toast.error(errorMsg);
      
    }

  }

    
  return (


    <div className="min-h-screen flex justify-center items-center w-full flex-col">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input
              onChange={(e)=>setEmail(e.target.value)} value={email}
              className="border border-gray-300 rounded-md w-full py-2 px-3 outline-none"
              type="email"
              placeholder="Enter your@email.com"
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e)=>setPassword(e.target.value)} value={password}
              className="border border-gray-300 rounded-md w-full py-2 px-3 outline-none"
              type="text"
              placeholder="Enter your password"
            />
          </div>
          <div className="text-left mb-2">
          <button
            type="button"
            onClick={fillTestAccount}
            className="text-sm text-gray-500 hover:text-black hover:underline transition"
          >
            Click here to use Test Account (Admin Demo)
          </button>
        </div>
          <button className="cursor-pointer mt-2 w-full py-2 px-4 rounded-md text-white bg-black" type="submit">Login</button>
        
        </form>
      </div>
      <div className="mt-4 text-center">
  </div>



    </div>
  );
};

export default Login;
