import React, {useEffect} from 'react'
import './sectionTitle.scss';
import {determineColors} from '../../assets/data/checkColors'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionTitle = ({data, backgroundColor}) => {
  const { firstColor, secondColor } = determineColors(backgroundColor);
    
  useEffect(() => {
    const initAOS = setTimeout(() => {
      AOS.init({ duration: 2000 });
    }, 100);
  
    return () => {
      clearTimeout(initAOS);
    };
  },[])

  return (
    <div className='title-content'>
        <h1 data-aos='fade-up' style={{color: firstColor}}>{data.title}</h1>
        <h3 data-aos='fade-up' style={{color: firstColor}}>{data.subTitle}</h3>
        <p data-aos='fade-up' style={{color:secondColor}}>{data.desc}</p>
    </div>
  )
}

export default SectionTitle