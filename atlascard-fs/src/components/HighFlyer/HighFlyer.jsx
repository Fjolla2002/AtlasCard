import React from 'react';
import { highFlyerData, tableContentHighFlyer } from '../../assets/data/dummydata';
import './highFlyer.scss'
import SectionTitle from '../SectionTitle/SectionTitle';
import TableContent from '../TableContent/TableContent';
import SingleImageContainer from '../SingleImageContainer/SingleImageContainer';

const HighFlyer = () => {
  const backColor = getComputedStyle(document.documentElement).getPropertyValue('--white-back');
  return (
    <div id='highFlyer'>
      <div className='container'>
        <SectionTitle 
          data={highFlyerData}  
          backgroundColor={backColor}
        />
      </div>
      <SingleImageContainer data={highFlyerData}/>
      <div className='container'>
        <div className='table-container'>
             <TableContent data={tableContentHighFlyer.rows} backgroundColor={backColor}/>
        </div>
        <div className='visa-benefits'>
          <span>{highFlyerData.visa.icon}</span>
          <h3>{highFlyerData.visa.title}</h3>
          <p>{highFlyerData.visa.desc}</p>
          <button>{highFlyerData.visa.btnDesc}</button>
        </div>
      </div>
    </div>
  );
};

export default HighFlyer;
