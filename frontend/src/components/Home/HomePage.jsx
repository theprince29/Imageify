import React from 'react'
import Hero from './Hero'
import Pricing from '../Pricing/Pricing'
import FAQ from '../Layout/FAQ'
import { Footer } from '../Layout/Footer'
import { DragCards } from '../DragBox/DragCards'





const HomePage = () => {
  return (
    <div>
        <Hero/>
        <DragCards/>
        
        <Pricing/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default HomePage