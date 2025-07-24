import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import QuoteCarousel from './components/QuoteCarousel.jsx'
import MainSection from './components/MainSection.jsx'

function App() {

  return (
    <>
    <Navbar />
    <QuoteCarousel/>
    <MainSection/>
    <Footer />
    </>
  )
}

export default App
