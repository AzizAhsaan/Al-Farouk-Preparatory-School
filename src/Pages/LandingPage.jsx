import React from 'react'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import ImportantPeople from '../Components/ImportantPeople'
import SceinteticActivities from '../Components/SceinteticActivities'
import Map from '../Components/Map'

const LandingPage = () => {
  return (
    <main className='w-full  '>
        <HeroSection />
        <Services />
        <ImportantPeople />
        <SceinteticActivities />
        <Map />
    </main>
  )
}

export default LandingPage