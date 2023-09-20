import React from 'react'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import TasteMaker from '../components/TasteMaker/TasteMaker'
import HighFlyer from '../components/HighFlyer/HighFlyer'
import HeadTurner from '../components/HeadTurner/HeadTurner'
import PowerCouple from '../components/PowerCouple/PowerCouple'
import TrulyPersonal from '../components/TrulyPersonal/TrulyPersonal'
import ExecutiveBrief from '../components/ExecutiveBrief/ExecutiveBrief'

const HomePage = () => {
  return (
    <div>
        <HomeBanner/>
        <TasteMaker />
        <HighFlyer />
        <HeadTurner />
        <PowerCouple />
        <TrulyPersonal />
        <ExecutiveBrief />
    </div>
  )
}

export default HomePage