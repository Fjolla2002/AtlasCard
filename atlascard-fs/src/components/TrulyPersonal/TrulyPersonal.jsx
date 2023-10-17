import React, {useEffect} from 'react';
import './trulyPersonal.scss';
import { tableContentTrulyPersonal, trulyPersonalData } from '../../assets/data/dummydata';
import SectionTitle from '../SectionTitle/SectionTitle';
import TableContent from '../TableContent/TableContent';
import SingleImageContainer from '../SingleImageContainer/SingleImageContainer';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TrulyPersonal = () => {
    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--white-back');

  useEffect(() => {
    AOS.init({duration:2000});
  },[])

  return (
    <div id='trulyPersonal' style={{backgroundColor:backColor}}>
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
                <img data-aos='fade-up' src={trulyPersonalData.cardImage} alt={trulyPersonalData.cardImageDesc} />
                <span data-aos='fade-up'>{trulyPersonalData.cardImageDesc}</span>
            </div>
        </div>
    </div>
  )
}

export default TrulyPersonal