import React, {useState, useEffect} from 'react';
import './singleImageContainer.scss'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleImageContainer = ({data}) => {
  const [responsive, setResponsive] = useState(window.innerWidth <= 768);
  const [image, setImage] = useState(responsive ? data.responsiveImage : data.image);

    
  useEffect(() => {
    AOS.init({duration:2000});
  },[])

  useEffect(() => {
    const handleResize = () => {
        setResponsive(window.innerWidth <= 768);
        setImage(responsive ? data.responsiveImage : data.image);
    };

    window.addEventListener('resize', handleResize);
  }, [data.image, data.responsiveImage, responsive]);

  return (
    <div className='banner-content'>
        <div className='banner-image' data-aos='fade-up'>
            <div className='container'>
            <div className='image'>
                <img src={image} alt={data.imageDesc} />
            </div>
            </div>
        </div>
        <div className='banner-desc' data-aos='fade-up'>
            <span>{data.imageDesc}</span>
        </div>
    </div>
  )
}

export default SingleImageContainer