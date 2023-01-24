import "./NavStyles.css"
import React, {useState} from 'react'
import { Link } from "react-router-dom"
import {FaBars,FaTimes} from "react-icons/fa"


const Navbar = () => {
    const[click,setClick]=useState(false);
    const handleClick=()=> setClick(!click)

const[color,setColor]=useState(false)   
const changeColor=()=>{
    if(window.scrollY>=100){
        setColor(true)
    }else{
        setColor(false)
    }
} 

window.addEventListener("scroll",changeColor)

  return (
    <div className={color?"header header-bg":"header"}>
        <Link to="/"><h1 className="navcl">Portfolio</h1></Link>
        <ul className={click?"navmenu active":"navmenu"}>
            <li>
                <Link className="navcl" to="/">Home</Link>
            </li>
            <li>
                <Link className="navcl" to="/Project">Project</Link>
            </li>
            <li>
                <Link className="navcl" to="/About">About</Link>
            </li>
            <li>
                <Link className="navcl" to="/Contact">Contact</Link>
            </li>
           
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click?(<FaTimes size={20} style={{color:"#fff"}} />)
            :  <FaBars size={20} style={{color:"#fff"}} />}
             
           
            </div>
    </div>
  )
}

export default Navbar