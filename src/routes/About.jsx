import React from 'react'
import Navbar from '../components/Navbar'
import { Footer } from '../components/Footer'
import Heroimg2 from '../components/Heroimg2'

const About = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg2 heading="Who Am I?"
         text="Im a react front-end developer.
         I create responsive secure websites"/>
      <Footer/>
    </div>
  )
}

export default About
