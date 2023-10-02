import React from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import { headTurnerData, tableContentHeadTurner } from '../../assets/data/dummydata';
import './headTurner.scss';
import TableContent from '../TableContent/TableContent';

const HeadTurner = () => {
    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--white-back');
  return (
    <div id='headTurner' style={{backgroundColor: backColor}}>
        <div className='container'>
            <div className='card-item'>
                <img src={headTurnerData.video} alt="" />
                <span>{headTurnerData.videoDesc}</span>
            </div>
            <SectionTitle data={headTurnerData} backgroundColor={backColor}/>
        </div>
        <div className='card-items'>
            <div className='two-cards-container'>
                <div className='left-single-card'>
                    <img src={headTurnerData.images[0]} alt={headTurnerData.imagesDesc} />
                </div>
                <div className='right-single-card'>
                    <img src={headTurnerData.images[1]} alt={headTurnerData.imagesDesc} />
                </div>
            </div>
            <div className='centered-images-desc'>
                <span>{headTurnerData.imagesDesc}</span>
            </div>
        </div>
        <div className='container'>
            <div className='table-container'>
                <TableContent data={tableContentHeadTurner.rows} backgroundColor={backColor}/>
            </div>
        </div>
    </div>
  )
}

export default HeadTurner