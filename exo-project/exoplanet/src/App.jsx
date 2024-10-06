import React from 'react'
import Header from './components/Header.jsx'
import HeroSection from './components/hero.jsx'
import FeaturedExoplanets from './components/Featured.jsx'
import ExoplanetCarousel from './components/ExoplanetCarousel.jsx';
import Carousel from './components/carousel.jsx';
import Cards from './components/Cards.jsx';
import ExoplanetExplorer from './pages/ExoplanetExplorer.jsx';
import FullPageCarousel from './pages/FullPageCarousel.jsx';



function App() {
  return (
    <>
    
    <div className="w-full h-screen bg-zinc-9">
      <Header/>
      <HeroSection/>
      <Cards />
      <ExoplanetExplorer/>
      {/* <Carousel /> */}
      <iframe
        src="https://chatbot-3.vercel.app/"
        width="100%"
        height="600px"
     frameborder="0"
      ></iframe>
      <FullPageCarousel/>

    </div>
  
    </>  
  )
}

export default App
