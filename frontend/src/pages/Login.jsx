import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');

  //測試後端有沒有通

  useEffect(() =>{

    const testAPI = async () =>{
      const response = await axios.get('http://localhost:4000/');
      console.log("後端測試:", response.data)
  };
  testAPI();
}, []
);

  const onSumitHandler = async (event) => {
    event.preventDefault();
    
      // try {

      //   const response = await axios.post('http://localhost:4000/api/user', {email, password})
        
      // } catch (error) {
        
      // }
  }

  return (
  
     <form onSubmit={onSumitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 mb-10'>
        <div className='inline-flex items-center gap-2 mb-2 mt-10'>
             <p className='prata-regular text-3xl'>{currentState}</p>
             <hr className='border-none h-[1.5px] w-8 bg-gray-800'></hr>
        </div>
        {currentState ==='Login'? '': <input type="text" className='font-light text-sm w-full px-1 py-2 border-b border-gray-900' placeholder='Name' required/>}
        <input type="email" className='font-light text-sm w-full px-1 py-2 border-b border-gray-900' placeholder='Email' required/>
        <input type="password" className='font-light text-sm w-full px-1 py-2 border-b border-gray-900' placeholder='Password' required/>
        <div className='w-full flex justify-between text-sm mt-[8px]'>
            <p onClick={()=>{toast.error('Sorry, we currently can not help with that.')}} className='cursor-pointer underline underline-offset-4'>Forgot your password?</p>
            {
              currentState === 'Login'
              ? <p onClick={()=>setCurrentState('Sign Up')} className='cursor-pointer underline underline-offset-4'>Create account</p>
              : <p onClick={()=>setCurrentState('Login')} className='cursor-pointer underline underline-offset-4'>Login here</p>
            }
        </div>

    

        <button className='bg-black text-white font-light px-8 py-3 mt-4'>{currentState === 'Login'? 'Sign In':'Sign Up'}</button>

     
     </form>
   )
}

export default Login
