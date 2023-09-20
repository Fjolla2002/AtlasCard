import React from 'react';
import './trulyPersonal.scss';
import { tableContentTrulyPersonal, trulyPersonalData } from '../../assets/data/dummydata';
import SectionTitle from '../SectionTitle/SectionTitle';
import TableContent from '../TableContent/TableContent';

const TrulyPersonal = () => {
    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--white-back');
  return (
    <div id='trulyPersonal'>
        <div className='container'>
            <SectionTitle 
            data={trulyPersonalData}  
            backgroundColor={backColor}
            />
        </div>
        <div className='banner-content'>
            <div className='banner-image'>
                <div className='container'>
                    <img src={trulyPersonalData.images[0]} alt={trulyPersonalData.imagesDesc[0]} />
                </div>
            </div>
            <div className='banner-desc'>
                <span>{trulyPersonalData.imagesDesc[0]}</span>
            </div>
        </div>
        <div className='container'>
            <div className='table-container'>
                <TableContent data={tableContentTrulyPersonal.rows} backgroundColor={backColor}/>
            </div>
            <div className='card-image'>
                <img src={trulyPersonalData.images[1]} alt={trulyPersonalData.imagesDesc[1]} />
                <span>{trulyPersonalData.imagesDesc[1]}</span>
            </div>
        </div>
    </div>
  )
}

export default TrulyPersonal