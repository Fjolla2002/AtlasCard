import React, { useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './users.scss';
import axios from 'axios';
import SectionTitle from '../SectionTitle/SectionTitle';
import { usersData } from '../../assets/data/dummydata';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Users = () => {
    const [users, setUsers] = useState();

  useEffect(() => {
    AOS.init({duration:2000});
  },[])

    useEffect(()=>{
        axios.get('https://example-data.draftbit.com/users')
        .then((res)=>{
            setUsers(res.data)
            console.log(res.data);
        })
        .catch((error) => {
            console.log("error", error)
        })
    },[])

    const backColor = getComputedStyle(document.documentElement).getPropertyValue('--black-back');

    const usersContainer = document.querySelector('.all-users');

    const swipeRight = () => {
        const currentPosition = usersContainer.scrollLeft;
        const singleUserWidth = document.querySelector('.single-user').offsetWidth + 16;
    
        let targetScrollPosition = currentPosition + singleUserWidth;
        if (targetScrollPosition + usersContainer.offsetWidth >= usersContainer.scrollWidth) {
          targetScrollPosition = 0;
        }
    
        usersContainer.scrollTo({
          left: targetScrollPosition,
          behavior: 'smooth',
        });
      };

    const swipeLeft = () => {
        const currentPosition = usersContainer.scrollLeft;
        const singleUserWidth = document.querySelector('.single-user').offsetWidth + 16;
        let targetScrollPosition = currentPosition - singleUserWidth;
        if (targetScrollPosition < 0) {
            targetScrollPosition = usersContainer.scrollWidth;
        }
        usersContainer.scrollTo({
            left: targetScrollPosition,
            behavior: 'smooth',
          });
      
    }
    
  return (
    <div id='users' style={{backgroundColor: backColor}}>
        <div className="container">
        <SectionTitle data={usersData} backgroundColor={backColor}/>
        </div>
        <div className='users-container' data-aos='fade-up'> 
            <span className='left-arrow' onClick={() => swipeLeft()}>&#8249;</span>
            <div className='all-users'>
                {users?.slice(0,25).map((user) => (
                    <NavLink to={`/profile/${user.id}`} key={user.id}>
                        <div className='single-user'>
                            <div className='user-image'>
                                <img data-aos='fade-up' src={user.avatar} alt={user.fullName} />
                            </div>
                            <div className='user-info'>
                                <h2 data-aos='fade-up'>{user.fullName}</h2>
                                <p data-aos='fade-up'>{user.bio}</p>
                                <div className='contact-info'>
                                    <div className='user-contact' data-aos='fade-up'>
                                        <span>&#9993;</span>
                                        <span>{user.email}</span>
                                    </div>
                                    <div className='user-contact' data-aos='fade-up'>
                                        <span>&#128241;</span>
                                        <span>{user.phone}</span>
                                    </div>
                                    <div className='user-contact' data-aos='fade-up'>
                                        <span><img src={usersData.twitterImg} alt={user.name} /></span>
                                        <span>{user.twitterHandle}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </NavLink>
                ))}
            </div>
            <span className='right-arrow' onClick={() => swipeRight()}>&#8250;</span>
        </div>
    </div>
  )
}

export default Users