import React, { useState, useEffect } from 'react';
import './threeImagesContainer.scss';
import { determineColors } from '../../assets/data/checkColors';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ThreeImagesContainer = ({ data, backgroundColor }) => {
  const { firstColor } = determineColors(backgroundColor);

  const [responsive, setResponsive] = useState(window.innerWidth <= 768);
  const [images, setImages] = useState(responsive ? data.responsiveImages : data.images);
    
  useEffect(() => {
    AOS.init({duration:2000});
  },[])

  useEffect(() => {
    const handleResize = () => {
        setResponsive(window.innerWidth <= 768);
        setImages(responsive ? data.responsiveImages : data.images);
    };

    window.addEventListener('resize', handleResize);
  }, [data.images, data.responsiveImages, responsive]);

  return (
    <div className='images-content'>
      <div className='single-image'>
        <img data-aos='fade-up' src={images[0]} alt={data.imagesDesc[0]} />
        <span data-aos='fade-up' style={{ color: firstColor }}>{data.imagesDesc[0]}</span>
      </div>
      <div className='two-images'>
        <div className='two-images-col'>
          <img data-aos='fade-up' src={images[1]} alt={data.imagesDesc[1]} />
          <span data-aos='fade-up' style={{ color: firstColor }}>{data.imagesDesc[1]}</span>
        </div>
        <div className='two-images-col'>
          <img data-aos='fade-up' src={images[2]} alt={data.imagesDesc[2]} />
          <span data-aos='fade-up' style={{ color: firstColor }}>{data.imagesDesc[2]}</span>
        </div>
      </div>
    </div>
  );
};

export default ThreeImagesContainer;
