import React from 'react';
import { tasteMakerData, tableContentTasteMaker } from '../../assets/data/dummydata';
import './tasteMaker.scss'
import TableContent from '../TableContent/TableContent';
import SectionTitle from '../SectionTitle/SectionTitle';
import ThreeImagesContainer from '../ThreeImagesContainer/ThreeImagesContainer';

const TasteMaker = () => {
    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--black-back').trim();
  return (
    <div id='tasteMaker'>
        <div className='container'>
            <SectionTitle
                data={tasteMakerData} 
                backgroundColor={backColor} 
            />
            <div className='horse-image-content'>
                <img src={tasteMakerData.bannerImg} alt={tasteMakerData.bannerImgDesc} />
                <span>{tasteMakerData.bannerImgDesc}</span>
            </div>
            <div className='table-container'>
             <TableContent data={tableContentTasteMaker.rows} backgroundColor={backColor}/>
            </div>
            <ThreeImagesContainer  data={tasteMakerData} backgroundColor={backColor}/>
        </div>
    </div>
  )
}

export default TasteMaker