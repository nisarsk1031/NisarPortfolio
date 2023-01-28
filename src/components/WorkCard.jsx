import "./WorkCardStyles.css"
import React from 'react'
import pro1 from "../assets/project1.png"
import pro2 from "../assets/project2.png"
import {NavLink} from "react-router-dom"

const WorkCard = () => {
  return (
    <div className="work-container">
    <h1 className="project-heading">Projects</h1>
    <div className="project-container">
        <div className="project-card">
            <img src={pro1} alt="image"/>
            <h2 className="project-title">Project Title</h2>
        <div className="pro-details">
            <p>This is text</p>
            <div className="pro-btns">
                <NavLink to="url.com" className="btn">View</NavLink>
                {/* use anchor tag like used in github icon */}
                <NavLink to="url.com" className="btn">Source</NavLink>
            </div>
        </div>
        </div>
        <div className="project-card">
            <img src={pro2} alt="image"/>
            <h2 className="project-title">Portfolio</h2>
        <div className="pro-details">
            <p>My Portfolio using React etc</p>
            <div className="pro-btns">
                <NavLink to="https://www.youtube.com/watch?v=P8YuWEKTeuE" className="btn">View</NavLink>
                <NavLink to="https://pixabay.com/" className="btn">Source</NavLink>
            </div>
        </div>
        </div>

    </div>
    </div>
  )
}

export default WorkCard