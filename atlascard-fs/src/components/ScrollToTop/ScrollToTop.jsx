import React from 'react';
import './scrollToTop.scss';
import arrowUp from '../../assets/images/arrowUp.svg'

const ScrollToTop = () => {
    const handleScroll = () => {
        window.scrollTo({
            top: 0, left: 0, behavior: 'smooth'
        })
    }

    return (
        <div className='scrollTop'>
            <button onClick={handleScroll}>
                <img src={arrowUp} alt="arrowup" />
            </button>
        </div>
    )
}

export default ScrollToTop;
