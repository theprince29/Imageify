import React from 'react'
import Hero from './Hero'
import Pricing from '../Pricing/Pricing'
import FAQ from '../Layout/FAQ'
import { Footer } from '../Layout/Footer'
const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Pricing/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default HomePage