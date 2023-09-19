import React from 'react';
import { tasteMakerData } from '../../assets/data/dummydata';
import TableContent from './TableContent';
import '../../style/style.scss'

const TasteMaker = () => {
  return (
    <div className='tasteMaker'>
        <div className='container'>
            <div className='top-content'>
                <h1>{tasteMakerData.title}</h1>
                <h3>{tasteMakerData.subTitle}</h3>
                <p>{tasteMakerData.desc}</p>
            </div>
            <div className='horse-image-content'>
                <img src={tasteMakerData.images[0]} alt={tasteMakerData.imagesDesc[0]} />
                <span>{tasteMakerData.imagesDesc[0]}</span>
            </div>
            <div className='table-container'>
             <TableContent />
            </div>
            <div className='images-content'>
                <div className='single-image'>
                    <img src={tasteMakerData.images[1]} alt={tasteMakerData.imagesDesc[1]} />
                    <span>{tasteMakerData.imagesDesc[1]}</span>
                </div>
                <div className='two-images'>
                    <div className='two-images-col'>
                        <img src={tasteMakerData.images[2]} alt={tasteMakerData.imagesDesc[2]} />
                        <span>{tasteMakerData.imagesDesc[2]}</span>
                    </div>
                    <div className='two-images-col'>
                        <img src={tasteMakerData.images[3]} alt={tasteMakerData.imagesDesc[3]} />
                        <span>{tasteMakerData.imagesDesc[3]}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TasteMaker