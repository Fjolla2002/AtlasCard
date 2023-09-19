import React from 'react';
import { highFlyerData } from '../../assets/data/dummydata';
import './highFlyer.scss'
import SectionTitle from '../SectionTitle/SectionTitle';

const HighFlyer = ({backColor}) => {

  return (
    <div className='highFlyer'>
      <div className='container'>
        <SectionTitle 
          data={highFlyerData}  
          backColor={backColor}
        />
      </div>
    </div>
  );
};

export default HighFlyer;
