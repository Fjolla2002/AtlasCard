import React, {useEffect} from 'react';
import './tableContent.scss';
import {determineColors} from '../../assets/data/checkColors'
import AOS from 'aos';
import 'aos/dist/aos.css';

const TableContent = ({data,  backgroundColor}) => {
  const { firstColor, secondColor } = determineColors(backgroundColor);
    
  useEffect(() => {
    AOS.init({duration:2000});
  },[])
  

  return (
    <div className="table-content">
      <table>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="table-row" style={{borderColor: secondColor}} data-aos='fade-up'>
              <td className="table-col col1" style={{color: firstColor}}>{item.title}</td>
              <td className="table-col" style={{color: secondColor}}>{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableContent