import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import QuoteCarousel from './components/QuoteCarousel.jsx'
import HomeSection from './components/HomeSection.jsx'

function App() {

  return (
    <>
    <Navbar />
    <QuoteCarousel/>
    <HomeSection/>
    <Footer />
    </>
  )
}

export default App
