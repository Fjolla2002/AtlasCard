import React from 'react';
import {tableContentTasteMaker} from '../../assets/data/dummydata';
import '../../style/style.scss'

const TableContent = () => {
  return (
    <div className="table-content">
      <table>
        <tbody>
          {tableContentTasteMaker.rows.map(item => (
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