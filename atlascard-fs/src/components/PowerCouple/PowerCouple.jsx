import React from 'react';
import './powerCouple.scss';
import { powerCoupleData, tableContentPowerCoupleData } from '../../assets/data/dummydata';
import SectionTitle from '../SectionTitle/SectionTitle';
import TableContent from '../TableContent/TableContent';
import ThreeImagesContainer from '../ThreeImagesContainer/ThreeImagesContainer';
import SingleImageContainer from '../SingleImageContainer/SingleImageContainer';

const PowerCouple = () => {
    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--white-back');
  return (
    <div id='powerCouple' style={{backgroundColor: backColor}}>
        <div className='container'>
            <SectionTitle 
                data={powerCoupleData}
                backgroundColor={backColor}
            />
        </div>
        <SingleImageContainer data={powerCoupleData}/>
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