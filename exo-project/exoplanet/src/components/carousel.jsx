import React, { useState } from 'react';
import './Carousel.css';

const images = [
  'https://images.unsplash.com/photo-1590388143860-6594f1fbc1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D',

  'https://images.unsplash.com/photo-1545156521-77bd85671d30?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

  'https://images.unsplash.com/photo-1590388143860-6594f1fbc1f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D',
  
  'https://images.unsplash.com/photo-1632395627760-72e6eca7f9c7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBsYW5ldHxlbnwwfHwwfHx8MA%3D%3D'
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel__wrapper">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel__slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <button className="carousel__button prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel__button next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel__indicators">
        {images.map((_, index) => (
          <div
            key={index}
            className={`carousel__indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
