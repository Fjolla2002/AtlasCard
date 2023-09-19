import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import TasteMaker from '../components/TasteMaker/TasteMaker'
import HighFlyer from '../components/HighFlyer/HighFlyer'

const HomePage = () => {
  return (
    <div>
        <HomeBanner/>
        <TasteMaker backColor="#141414"/>
        <HighFlyer backColor="#f7f7f2"/>
    </div>
  )
}

export default HomePage