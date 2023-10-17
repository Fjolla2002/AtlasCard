import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import { highFlyerData, tableContentHighFlyer } from '../../assets/data/dummydata';
import './highFlyer.scss'
import SectionTitle from '../SectionTitle/SectionTitle';
import TableContent from '../TableContent/TableContent';
import SingleImageContainer from '../SingleImageContainer/SingleImageContainer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HighFlyer = () => {
  const backColor = getComputedStyle(document.documentElement).getPropertyValue('--white-back');
  
  useEffect(() => {
    AOS.init({duration:2000});
  },[])

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
          <span data-aos='fade-up'>{highFlyerData.visa.icon}</span>
          <h3 data-aos='fade-up'>{highFlyerData.visa.title}</h3>
          <p data-aos='fade-up'>{highFlyerData.visa.desc}</p>
          <NavLink to={highFlyerData.visa.btnUrl} data-aos='fade-up'>
            <button>{highFlyerData.visa.btnDesc}</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default HighFlyer;
