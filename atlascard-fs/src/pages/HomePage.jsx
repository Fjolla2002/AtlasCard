import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import TasteMaker from '../components/TasteMaker/TasteMaker'
import HighFlyer from '../components/HighFlyer/HighFlyer'
import HeadTurner from '../components/HeadTurner/HeadTurner'

const HomePage = () => {
  return (
    <div>
        <HomeBanner/>
        <TasteMaker />
        <HighFlyer />
        <HeadTurner />
    </div>
  )
}

export default HomePage