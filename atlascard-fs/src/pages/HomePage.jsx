import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import TasteMaker from '../components/TasteMaker/TasteMaker'
import HighFlyer from '../components/HighFlyer/HighFlyer'
import HeadTurner from '../components/HeadTurner/HeadTurner'
import PowerCouple from '../components/PowerCouple/PowerCouple'

const HomePage = () => {
  return (
    <div>
        <HomeBanner/>
        <TasteMaker />
        <HighFlyer />
        <HeadTurner />
        <PowerCouple />
    </div>
  )
}

export default HomePage