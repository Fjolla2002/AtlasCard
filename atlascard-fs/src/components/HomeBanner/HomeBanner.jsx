import React, { useEffect } from 'react';
import { homeBannerData } from '../../assets/data/dummydata';
import './homeBanner.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeBanner = () => {
  
  useEffect(() => {
    AOS.init({duration:2000});
  },[])

  return (
    <div className='homeBanner'>
        <h1 data-aos='fade-up'>{homeBannerData.title}</h1>
        <img src={homeBannerData.image} alt={homeBannerData.title} />
        <div className='container'>
            <p data-aos='fade-up'>
                {homeBannerData.desc} 
                <br />
                <span>{homeBannerData.span}</span>
            </p>
        </div>
    </div>
  )
}

export default HomeBanner;
