import React, { useState } from 'react';
import './Carousel.css';

const images = [
  '../assets/presentation/1.jpg',

  '../assets/presentation/2.jpg',

  '../assets/presentation/3.jpg',
  
  '../assets/presentation/4.jpg'
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
