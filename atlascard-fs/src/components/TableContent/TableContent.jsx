import React from 'react';
// import '../../style/style.scss'
import './tableContent.scss';

const TableContent = ({data}) => {
  return (
    <div className="table-content">
      <table>
        <tbody>
          {data.map(item => (
            <tr key={item.id} className="table-row">
              <td className="table-col col1">{item.title}</td>
              <td className="table-col">{item.desc}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableContent