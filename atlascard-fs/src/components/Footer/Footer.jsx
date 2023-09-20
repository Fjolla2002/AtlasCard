import React from 'react';
import './footer.scss';
import { footerTopData } from '../../assets/data/dummydata';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className='footer-top'>
                {
                    footerTopData.categories.map((item) => (
                        <div className='footer-category' key={item.id}>
                            <span>{item.title}</span>
                            {item.items.map((el) => (
                                <NavLink to={el.path}>{el.title}</NavLink>
                            ))}
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Footer