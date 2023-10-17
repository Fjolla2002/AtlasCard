import React, {useEffect} from 'react'
import SectionTitle from '../SectionTitle/SectionTitle';
import { headTurnerData, tableContentHeadTurner } from '../../assets/data/dummydata';
import './headTurner.scss';
import TableContent from '../TableContent/TableContent';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeadTurner = () => {
    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--white-back'); 

    useEffect(() => {
      AOS.init({duration:2000});
    },[])

  return (
    <div id='headTurner' style={{backgroundColor: backColor}}>
        <div className='container'>
            <div className='card-item'>
                <img data-aos='fade-up' src={headTurnerData.video} alt="" />
                <span data-aos='fade-up'>{headTurnerData.videoDesc}</span>
            </div>
            <SectionTitle data={headTurnerData} backgroundColor={backColor}/>
        </div>
        <div className='card-items'>
            <div className='two-cards-container' data-aos='fade-up'>
                <div className='left-single-card'>
                    <img data-aos='fade-up' src={headTurnerData.images[0]} alt={headTurnerData.imagesDesc} />
                </div>
                <div className='right-single-card'>
                    <img data-aos='fade-up' src={headTurnerData.images[1]} alt={headTurnerData.imagesDesc} />
                </div>
            </div>
            <div className='centered-images-desc'>
                <span data-aos='fade-up'>{headTurnerData.imagesDesc}</span>
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