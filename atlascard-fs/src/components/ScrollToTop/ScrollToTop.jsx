import React, { useState, useEffect } from 'react';
import './scrollToTop.scss';
import arrowUp from '../../assets/images/arrowUp.svg';
import arrowDown from '../../assets/images/arrowDown.svg';

const ScrollToTop = () => {
    const [showArrowUp, setShowArrowUp] = useState(false);

    const handleScroll = () => {
        setShowArrowUp(window.scrollY > window.screen.height);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const scrollToBottom = () => {
        window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='scrollTop'>
            <button onClick={showArrowUp ? scrollToTop : scrollToBottom}>
                <img src={showArrowUp ? arrowUp : arrowDown} alt={showArrowUp ? 'arrow up' : 'arrow down'} />
            </button>
        </div>
    );
};

export default ScrollToTop;
