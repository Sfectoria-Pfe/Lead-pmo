import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Newsletter from './Newsletter'
import About from './About'
import Price from './Price'
import Footer from './Footer'

const Landing = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/> 
      <Newsletter/>
      
      <Price/>
      <Footer/>
   
    </div>
  )
}

export default Landing
