import React, { useEffect, useState } from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ScrollReveal from '../components/ScrollReveal'
import Loader from '../components/Loader'
import { ShopContext } from '../context/ShopContext'

const Home = () => {

  const products = useState(ShopContext);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {

    if (products && products.length >0) {
      setLoading(false);
    }
  },[products]);

  if(loading){
    return <Loader/>;
  }
  
  return (
    <div>
        <Hero/>
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
        <LatestCollection/>
        <BestSeller/>
        <OurPolicy/>

      <ScrollReveal delay={0.2}>
        <NewsletterBox/>
      </ScrollReveal>
      </div>
      
    </div>
  )
}

export default Home
