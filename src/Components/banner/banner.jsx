import React, {useState, useEffect } from "react";
import './banner.css'


    const images = [
      "/images/bannerImage.jpg",
      "/images/banner2.png"
    ]


    function Banner() {
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const moveSlide = (direction) => {
        if (direction === 'next') {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images
          .length);
        } else if (direction === 'prev') {
          setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
          );
        }
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          moveSlide('next');
        }, 6000); 
    
        return () => clearInterval(interval); 
      }, []);

      return (
        <div className="App">
          <div className="slider-container">
            
            <button className="prev btn-secondary-tgl-sm-active" onClick={() => moveSlide('prev')}>
              &#10094;
            </button><div className="slider">
              <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image"/>
            </div>
            <button className="next btn-secondary-tgl-sm-active" onClick={() => moveSlide('next')}>
              &#10095;
            </button>
          </div>
        </div>
      );
    }
    

export default Banner;