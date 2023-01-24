import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from "../components/Heroimg"
import { Footer } from '../components/Footer'
// import Project from "../routes/Project"
// import Contact from "../routes/Contact"
// import About from "../routes/About"

const Home = () => {
  return (
    <div>
         <Navbar/>
         <Heroimg/>
         {/* <Project/>
         <About/>
         <Contact/> */}
         <Footer/>
    </div>
  )
}

export default Home