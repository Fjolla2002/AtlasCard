import React from 'react';
import './tableContent.scss';
import {determineColors} from '../../assets/data/checkColors'

const TableContent = ({data,  backgroundColor}) => {
  const { firstColor, secondColor } = determineColors(backgroundColor);

  return (
    <div className="table-content">
      <table>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="table-row" style={{borderColor: secondColor}}>
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