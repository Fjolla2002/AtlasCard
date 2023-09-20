import React from 'react';
import './powerCouple.scss';
import { powerCoupleData, tableContentPowerCoupleData } from '../../assets/data/dummydata';
import SectionTitle from '../SectionTitle/SectionTitle';
import TableContent from '../TableContent/TableContent';
import ThreeImagesContainer from '../ThreeImagesContainer/ThreeImagesContainer';

const PowerCouple = () => {
    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--white-back');
  return (
    <div id='powerCouple'>
        <div className='container'>
            <SectionTitle 
                data={powerCoupleData}
                backgroundColor={backColor}
            />
        </div>
        <div className='banner-content'>
            <div className='banner-image'>
                <img src={powerCoupleData.bannerImg} alt={powerCoupleData.bannerImgDesc} />
            </div>
            <div className='banner-desc'>
                <span>{powerCoupleData.bannerImgDesc}</span>
            </div>
        </div>
        <div className='container'>
            <div className='table-container'>
             <TableContent data={tableContentPowerCoupleData.rows} backgroundColor={backColor}/>
            </div>
            <ThreeImagesContainer data={powerCoupleData} backgroundColor={backColor}/>
        </div>
    </div>
  )
}

export default PowerCouple