import "./Footerstyles.css"
import React from 'react'
import { FaGithub, FaHome,FaInstagram,FaLinkedin,FaMailBulk,FaPhone } from "react-icons/fa"

export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} 
                    style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Lane no.3 , Peer Burhan Colony</p>
                        <p>Nanded -431605</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} 
                    style={{color:"#fff", marginRight:"2rem"}}/>
                    7066-219-375</h4>
                </div>
                <div className="email">
                <h4>
                    <FaMailBulk size={20} 
                    style={{color:"#fff", marginRight:"2rem"}}/>
                    nisarsk1031@gmail
                    </h4>
                </div>
            </div>
            <div className="right">
                <div className="social">
                <p>You can also connect me on:</p>
                <div className="linkedin">
                    <h4>
                <FaLinkedin size={20} 
                    style={{color:"#fff", marginRight:"1rem"}}/>
                    https://www.linkedin.com/in/nisar-shaikh-b45260247
                    </h4>
                    </div>
                    <div className="insta">
                        <h4>
                <FaInstagram size={20} 
                    style={{color:"#fff", marginRight:"1rem"}}/>
                    lostboynik
                    </h4>
                    </div>
                    <div className="github">
                        <h4>
                <FaGithub size={20} 
                    style={{color:"#fff", marginRight:"1rem"}}/>
                    nisarsk1031
                    </h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
