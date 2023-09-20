import React from 'react'
import './sectionTitle.scss';
import {determineColors} from '../../assets/data/checkColors'

const SectionTitle = ({data, backgroundColor}) => {
  const { firstColor, secondColor } = determineColors(backgroundColor);
  return (
    <div className='title-content'>
        <h1 style={{color: firstColor}}>{data.title}</h1>
        <h3 style={{color: firstColor}}>{data.subTitle}</h3>
        <p style={{color:secondColor}}>{data.desc}</p>
    </div>
  )
}

export default SectionTitle