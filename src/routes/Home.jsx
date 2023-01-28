import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from "../components/Heroimg"
import { Footer } from '../components/Footer'
import WorkCard from '../components/WorkCard'
import ContactForm from '../components/ContactForm'


const Home = () => {
  return (
    <div>
         <Navbar/>
         <Heroimg/>
         <WorkCard/>
         {/* <ContactForm/> */}
         <Footer/>
    </div>
  )
}

export default Home