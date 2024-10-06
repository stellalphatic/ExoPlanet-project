import React from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/hero.jsx'
import FeaturedExoplanets from './components/Featured.jsx'
import ExoplanetCarousel from './components/ExoplanetCarousel.jsx';
import Carousel from './components/carousel.jsx'
import Cards from './components/Cards.jsx';


function App() {
  return (
    <>
    <div className="w-full h-screen bg-zinc-9">
      <Header/>
      <HeroSection/>
      <Cards />
      <Carousel />

    </div>
  
    </>  
  )
}

export default App