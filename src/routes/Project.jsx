import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'
import WorkCard from '../components/WorkCard'

const Project = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="projects." text="Some of my most recent works"/>
      <WorkCard/>
      <Footer/>
    </div>
  )
}

export default Project