import React, { useEffect } from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import TasteMaker from '../components/TasteMaker/TasteMaker'
import HighFlyer from '../components/HighFlyer/HighFlyer'
import HeadTurner from '../components/HeadTurner/HeadTurner'
import PowerCouple from '../components/PowerCouple/PowerCouple'
import TrulyPersonal from '../components/TrulyPersonal/TrulyPersonal'
import ExecutiveBrief from '../components/ExecutiveBrief/ExecutiveBrief'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomePage = () => {
    
  useEffect(() => {
    AOS.init({duration:2000});
  },[])

  return (
    <div>
        <HomeBanner data-aos='fade-up'/>
        <TasteMaker data-aos='fade-up'/>
        <HighFlyer data-aos='fade-up'/>
        <HeadTurner data-aos='fade-up'/>
        <PowerCouple data-aos='fade-up'/>
        <TrulyPersonal data-aos='fade-up'/>
        <ExecutiveBrief data-aos='fade-up' />
        <ScrollToTop/>
    </div>
  )
}

export default HomePage