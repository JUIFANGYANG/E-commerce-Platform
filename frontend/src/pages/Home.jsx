import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ScrollReveal from '../components/ScrollReveal'

const Home = () => {
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
