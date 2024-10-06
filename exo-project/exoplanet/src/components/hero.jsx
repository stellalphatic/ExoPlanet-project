import React from 'react';
import bgVideo from '../assets/Earth.mp4'

function HeroSection() {
  return (
    <section className="hero">
        <video src={bgVideo} autoPlay loop muted />
      <h2>Discover the Wonders of Exoplanets</h2>
    </section>
  );
}

export default HeroSection;