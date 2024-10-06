import React, { useEffect, useState } from 'react';
import './ExoplanetCarousel.css';

const ExoplanetCarousel = () => {
  const [exoplanets, setExoplanets] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Replace this URL with the actual API endpoint for exoplanets
    fetch('#')
      .then((response) => response.json())
      .then((data) => setExoplanets(data))
      .catch((error) => console.error('Error fetching exoplanet data:', error));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? exoplanets.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === exoplanets.length - 1 ? 0 : prevIndex + 1));
  };

  if (!exoplanets.length) {
    return <div>Loading...</div>;
  }

  const { imageUrl, name, distance, possibilityOfLife } = exoplanets[currentIndex];

  return (
    <div className="exoplanet-carousel">
      <div className="exoplanet-carousel__content">
        <div className="exoplanet-carousel__image">
          <img src={'https://images.unsplash.com/photo-1590388143860-6594f1fbc1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D'} alt={exoplanet} />
        </div>
        <div className="exoplanet-carousel__details">
          <h2>{name}</h2>
          <p>Distance: {distance} light-years</p>
          <div className="possibility-bar">
            <div
              className="possibility-bar__fill"
              style={{ width: `${possibilityOfLife}%` }}
            ></div>
          </div>
          <p>Possibility of Life: {possibilityOfLife}%</p>
        </div>
      </div>
      <button className="carousel__button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel__button next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default ExoplanetCarousel;
