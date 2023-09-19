import React from 'react';
import { homeBannerData } from '../../assets/data/dummydata';
import '../../style/style.scss';

const HomeBanner = () => {
  return (
    <div className='homeBanner'>
        <h1>{homeBannerData.banner.title}</h1>
        <img src={homeBannerData.banner.image} alt={homeBannerData.banner.title} />
        <div className='container'>
            <p>
                {homeBannerData.banner.desc} 
                <br />
                <span>{homeBannerData.banner.span}</span>
            </p>
        </div>
    </div>
  )
}

export default HomeBanner;
