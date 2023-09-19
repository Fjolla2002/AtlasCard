import React from 'react';
import { homeBannerData } from '../../assets/data/dummydata';
import './homeBanner.scss';

const HomeBanner = () => {
  return (
    <div className='homeBanner'>
        <h1>{homeBannerData.title}</h1>
        <img src={homeBannerData.image} alt={homeBannerData.title} />
        <div className='container'>
            <p>
                {homeBannerData.desc} 
                <br />
                <span>{homeBannerData.span}</span>
            </p>
        </div>
    </div>
  )
}

export default HomeBanner;
