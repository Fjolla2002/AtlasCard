import React from 'react';
import {NavLink} from 'react-router-dom';
import { highFlyerData, tableContentHighFlyer } from '../../assets/data/dummydata';
import './highFlyer.scss'
import SectionTitle from '../SectionTitle/SectionTitle';
import TableContent from '../TableContent/TableContent';
import SingleImageContainer from '../SingleImageContainer/SingleImageContainer';

const HighFlyer = () => {
  const backColor = getComputedStyle(document.documentElement).getPropertyValue('--white-back');
  return (
    <div id='highFlyer' style={{backgroundColor:backColor}}>
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
          <NavLink to={highFlyerData.visa.btnUrl}>
            <button>{highFlyerData.visa.btnDesc}</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HighFlyer;
