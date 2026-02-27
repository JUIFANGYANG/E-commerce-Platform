import React from 'react'
import {motion} from 'framer-motion';

const ScrollReveal = ({children, delay = 0}) => {

  return (

    <motion.div
    initial={{ opacity: 0, y:80 }}
    whileInView={{ opacity: 1, y:0 }}
    viewport={{ once:true , amount: 0.2}}
    transition={{duration: 0.6, ease: "easeOut", delay: delay}}

    >
     {children}
    </motion.div>
  )
}

export default ScrollReveal
