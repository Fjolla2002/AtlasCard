import React from 'react';
import './errorContent.scss';
import { errorData } from '../../assets/data/dummydata';
import SectionTitle from '../SectionTitle/SectionTitle';
import {NavLink} from 'react-router-dom';

const ErrorContent = () => {
    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--black-back');
  return (
    <div className='errorContent' style={{backgroundColor: backColor}}>
        <div className='container'>
            <SectionTitle data={errorData} backgroundColor={backColor}/>
           <div className='btn-content'>
            <NavLink to='/'>{errorData.btnText}</NavLink>
           </div>
        </div>
    </div>
  )
}

export default ErrorContent