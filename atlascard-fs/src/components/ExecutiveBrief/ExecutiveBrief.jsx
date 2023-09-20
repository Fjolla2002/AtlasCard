import React from 'react';
import './executiveBrief.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import { executiveBriefData, tableContentExecutiveBrief } from '../../assets/data/dummydata';

const ExecutiveBrief = () => {
    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--black-back').trim();
  return (
    <div id='executiveBrief'>
        <div className='container'>
            <SectionTitle data={executiveBriefData} backgroundColor={backColor}/>
            <div className='table-content'>
                {tableContentExecutiveBrief.tables.map((item) => (
                    <div className='table-item' key={item.id}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>{item.title}</td>
                                </tr>
                                {item.desc.map((item) => (
                                    <tr key={item}>
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
                <button>{executiveBriefData.member.btnDesc}</button>
                <span>{executiveBriefData.member.price}</span>
            </div>
        </div>
    </div>
  )
}

export default ExecutiveBrief