import React, {useState, useEffect} from 'react'

const Loader = () => {
  const [takeLonger, setTakeLonger] = useState(false);

  useEffect(()=>{

    const timer = setTimeout(() => setTakeLonger(true), 10000);
    return () =>clearTimeout(timer);
      
    },[]);

 

  return (
    <div className='flex flex-col justify-center items-center h-[60vh] gap-4'>
      <div className='animate-spin h-12 w-12 rounded-full border-t-2 border-b-2 border-gray-700'></div>
      <div className='text-center'>
        <p className='text-sm text-gray-500 font-medium animate-pulse'>
          {takeLonger? "Server is waking up, this might take a minute..." : "Loading collections...."}</p>
     {takeLonger && (
      <p className='text-xs text-gray-400 mt-2 italic'>
        Tip: Using free-tier hosting may cause a "cold start". Thank you for your patience!
      </p>
     )}

      </div>
    </div>
  )
}

export default Loader
