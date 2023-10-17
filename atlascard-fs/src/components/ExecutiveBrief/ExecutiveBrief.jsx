import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './executiveBrief.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { executiveBriefData, tableContentExecutiveBrief } from '../../assets/data/dummydata';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ExecutiveBrief = () => {
    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--black-back');
      
  useEffect(() => {
    AOS.init({duration:2000});
  },[])

  return (
    <div id='executiveBrief' style={{backgroundColor: backColor}}>
        <div className='container'>
            <SectionTitle data={executiveBriefData} backgroundColor={backColor}/>
            <div className='table-content'>
                {tableContentExecutiveBrief.tables.map((item) => (
                    <div className='table-item' key={item.id} data-aos='fade-up'>
                        <table>
                            <tbody>
                                <tr data-aos='fade-up'>
                                    <td>{item.title}</td>
                                </tr>
                                {item.desc.map((item) => (
                                    <tr key={item} data-aos='fade-up'>
                                        <td>
                                            {item}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            <div className='become-member'>
                <NavLink to={executiveBriefData.member.btnUrl} data-aos='fade-up'>
                    <button>{executiveBriefData.member.btnDesc}</button>
                </NavLink>
                <span data-aos='fade-up'>{executiveBriefData.member.price}</span>
            </div>
        </div>
    </div>
  )
}

export default ExecutiveBrief