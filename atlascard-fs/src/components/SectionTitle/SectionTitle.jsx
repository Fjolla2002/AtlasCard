import React from 'react'
import './sectionTitle.scss';

const SectionTitle = ({data, backColor}) => {
  let titleColor = '#000';
  let textColor = '#000';

  if (backColor === '#141414') {
    titleColor = '#f7f7f2';
    textColor = '#ffffff66'

  } else if (backColor === '#f7f7f2') {
    titleColor = '#141414';
    textColor = '#00000080'
  }

  return (
    <div className='title-content'>
        <h1 style={{color: titleColor}}>{data.title}</h1>
        <h3 style={{color: titleColor}}>{data.subTitle}</h3>
        <p style={{color:textColor}}>{data.desc}</p>
    </div>
  )
}

export default SectionTitle