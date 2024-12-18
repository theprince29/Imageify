import React from 'react'
import Hero from './Hero'
import Pricing from '../Pricing/Pricing'
import FAQ from '../Layout/FAQ'
import { Footer } from '../Layout/Footer'
import { DragCards } from '../DragBox/DragCards'

import { useContext } from "react";
import { Context } from "@/main";
import { useNavigate } from 'react-router-dom'


const HomePage = () => {
   const navigate = useNavigate()
    const { isAuthorized, setIsAuthorized, user } = useContext(Context);

      if(!isAuthorized){
        return navigate('/login')
      }
    
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