import React from 'react';
import { tasteMakerData, tableContentTasteMaker } from '../../assets/data/dummydata';
import './tasteMaker.scss'
import TableContent from '../TableContent/TableContent';
import SectionTitle from '../SectionTitle/SectionTitle';

const TasteMaker = ({backColor}) => {
  return (
    <div className='tasteMaker'>
        <div className='container'>
            <SectionTitle 
                data={tasteMakerData} 
                backColor={backColor}
            />
            <div className='horse-image-content'>
                <img src={tasteMakerData.images[0]} alt={tasteMakerData.imagesDesc[0]} />
                <span>{tasteMakerData.imagesDesc[0]}</span>
            </div>
            <div className='table-container'>
             <TableContent data={tableContentTasteMaker.rows}/>
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