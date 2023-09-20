import React from 'react';
import './threeImagesContainer.scss';
import { determineColors } from '../../assets/data/checkColors';

const ThreeImagesContainer = ({data, backgroundColor}) => {
    const {firstColor} = determineColors(backgroundColor)
  return (
    <div className='images-content'>
        <div className='single-image'>
            <img src={data.images[0]} alt={data.imagesDesc[0]} />
            <span style={{color:firstColor}}>{data.imagesDesc[0]}</span>
        </div>
        <div className='two-images'>
            <div className='two-images-col'>
                <img src={data.images[1]} alt={data.imagesDesc[1]} />
                <span style={{color:firstColor}}>{data.imagesDesc[1]}</span>
            </div>
            <div className='two-images-col'>
                <img src={data.images[2]} alt={data.imagesDesc[2]} />
                <span style={{color:firstColor}}>{data.imagesDesc[2]}</span>
            </div>
        </div>
    </div>
  )
}

export default ThreeImagesContainer