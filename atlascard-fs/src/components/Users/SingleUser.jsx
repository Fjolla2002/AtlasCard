import React, { useState, useEffect } from 'react';
import './singleUser.scss';
import {usersData} from '../../assets/data/dummydata'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleUser = () => {
    const [user, setUser] = useState();
    const { id } = useParams();

  useEffect(() => {
    AOS.init({duration:2000});
  },[])

    useEffect(() => {
        axios
          .get(`https://example-data.draftbit.com/users/${id}`)
          .then((res) => {
            setUser(res.data);
          })
          .catch((error) => {
            console.log('Error:', error);
          });
      }, [id]);

      const backColor = getComputedStyle(document.documentElement).getPropertyValue('--black-back');

  return (
    <div className='user' style={{backgroundColor:backColor}}>
      <div className='container'>
      {user ? (
        <div className='user-data'>
            <div className='left-side'>
                <img data-aos='fade-up' src={user.avatar} alt={user.fullName} />
            </div>
            <div className='right-side'>
                <div className='user-info'>
                    <h2 data-aos='fade-up'>This is</h2>
                    <h1 data-aos='fade-up'>{user.firstName} {user.lastName}</h1>
                    <p data-aos='fade-up'>{user.bio}</p>
                </div>
                <div className='contact-info'>
                    <div className='info' data-aos='fade-up'>
                        <span>&#128100;</span>
                        <p>{user.username}</p>
                    </div>
                    <div className='info' data-aos='fade-up'>
                        <span>&#9993;</span>
                        <p>
                            {user.email} 
                            <span>
                                {user.emailVerified ? '✓' : ''}
                            </span>
                        </p>
                    </div>
                    <div className='info' data-aos='fade-up'>
                        <span>&#128241;</span>
                        <p>{user.phone}</p>
                    </div>
                    <div className='info' data-aos='fade-up'>
                        <span><img src={usersData.twitterImg} alt={user.name} /></span>
                        <p>{user.twitterHandle}</p>
                    </div>

                </div>
            </div>
          
        </div>
      ) : (
        <p></p>
      )}
      </div>
    </div>
  );
};

export default SingleUser