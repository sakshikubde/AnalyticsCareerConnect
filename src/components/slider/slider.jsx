import React, { useState, useEffect } from 'react';
import './slider.css';
import img1 from '../slider/12.jpg'; // Adjust paths to your images
import img2 from '../slider/13.jpg';
import img3 from '../slider/14.jpg';

const BasicSlide = ({ images = [img1, img2, img3], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    );
  };

  return (
    <div className="slider">
      <button className="nav-btn prev-btn" onClick={goToPrevious}>&#10094;</button>
      
      <div className="slide-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>
      
      <button className="nav-btn next-btn" onClick={goToNext}>&#10095;</button>
      
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

// Default images using local imports
BasicSlide.defaultProps = {
  images: [img1, img2, img3]
};

export default BasicSlide;