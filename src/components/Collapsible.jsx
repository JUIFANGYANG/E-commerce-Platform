import React, { useState } from 'react'
import {motion, AnimatePresence} from 'framer-motion'


const Collapsible = ({title, children, initialOpen= false }) => {

    const [showDes, setShowDes] = useState(initialOpen);

  return (
    
      <div>
                <hr className='h-[2px] bg-gray-500 mb-5'/>
                <div onClick={()=>setShowDes(!showDes)} className='flex flex-row items-center justify-between'>
                <b className=' py-4 text-xl font-normal'>{title}</b>
                <p className='cursor-pointer text-xl pr-2'>{showDes ? '-':'+'}</p> 
                </div>

                <AnimatePresence>
                {showDes && 
                
                <motion.div
                  initial={{height: 0, opacity:0}}
                  animate={{height: 'auto', opacity:1}}
                  exit = {{height:0, opacity:0}}
                  transition={{ease:"easeInOut", duration:0.5}}
                  className='overflow-hidden'>

                  <div className='flex flex-col px-2 py-4 text-sm gap-2 text-gray-700 font-light'>
                    {children}
                  </div>
                </motion.div>
                }
                </AnimatePresence>


      </div>
    
  )
}

export default Collapsible
