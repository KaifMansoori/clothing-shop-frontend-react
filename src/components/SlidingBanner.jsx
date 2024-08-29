import { useState, useEffect } from 'react';


import image1 from '../assets/banner1.png';
import image2 from '../assets/banner-2.png';
import image3 from '../assets/banner-3.png';
import image4 from '../assets/banner-4.png';
import image5 from '../assets/banner-5.png';
import image6 from '../assets/banner-6.png';
import image7 from '../assets/banner-7.png';



const images = [image1, image2, image3,image4, image5, image6, image7];

const SlidingBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[450px] overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index + 1}`}
          className={`absolute inset-0 h-full w-full transition-transform duration-700 ease-in-out ${
            index === currentIndex ? 'translate-x-0' : 'translate-x-full'
          }`}
        />
      ))}
    </div>
  );
};

export default SlidingBanner;
