import React from 'react';
import './trulyPersonal.scss';
import { tableContentTrulyPersonal, trulyPersonalData } from '../../assets/data/dummydata';
import SectionTitle from '../SectionTitle/SectionTitle';
import TableContent from '../TableContent/TableContent';
import SingleImageContainer from '../SingleImageContainer/SingleImageContainer';

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
        <SingleImageContainer data={trulyPersonalData}/>
        <div className='container'>
            <div className='table-container'>
                <TableContent data={tableContentTrulyPersonal.rows} backgroundColor={backColor}/>
            </div>
            <div className='card-image'>
                <img src={trulyPersonalData.cardImage} alt={trulyPersonalData.cardImageDesc} />
                <span>{trulyPersonalData.cardImageDesc}</span>
            </div>
        </div>
    </div>
  )
}

export default TrulyPersonal