import React, { useState, useEffect } from 'react';
import { tasteMakerData, tableContentTasteMaker } from '../../assets/data/dummydata';
import './tasteMaker.scss';
import TableContent from '../TableContent/TableContent';
import SectionTitle from '../SectionTitle/SectionTitle';
import ThreeImagesContainer from '../ThreeImagesContainer/ThreeImagesContainer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TasteMaker = () => {
  const normalBackColor = getComputedStyle(document.documentElement).getPropertyValue('--black-back');
  const responsiveBackColor = getComputedStyle(document.documentElement).getPropertyValue('--white-back');

  const [responsive, setResponsive] = useState(window.innerWidth <= 480);
  const [backColor, setBackColor] = useState(responsive ? responsiveBackColor : normalBackColor);

   
  useEffect(() => {
    AOS.init({duration:2000});
  },[])

  useEffect(() => {
    const handleResize = () => {
      const isResponsive = window.innerWidth <= 480;
      setResponsive(isResponsive);
      setBackColor(isResponsive ? responsiveBackColor : normalBackColor);
    };

    window.addEventListener('resize', handleResize);
  }, [responsive, responsiveBackColor, normalBackColor]);

  return (
    <div id='tasteMaker' style={{backgroundColor: backColor }}>
        <div className='container'>
            <SectionTitle
                data={tasteMakerData} 
                backgroundColor={backColor} 
            />
            <div className='horse-image-content'>
                <img data-aos='fade-up' src={tasteMakerData.bannerImg} alt={tasteMakerData.bannerImgDesc} />
                <span data-aos='fade-up'>{tasteMakerData.bannerImgDesc}</span>
            </div>
            <div className='table-container'>
             <TableContent data={tableContentTasteMaker.rows} backgroundColor={backColor}/>
            </div>
            <ThreeImagesContainer data={tasteMakerData} backgroundColor={backColor}/>
        </div>
    </div>
  );
};

export default TasteMaker;
