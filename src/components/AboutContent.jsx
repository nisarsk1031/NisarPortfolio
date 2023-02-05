import "./AboutContentStyles.css";
import React from "react";
import { Footer } from "../components/Footer";

const AboutContent = () => {
  return (
    <div className="mainContainer">
      <div className="maindivAbout">
      <h2 style={{color:"aquamarine"}}> Hi, I'm Nisar</h2>
        <h3>
          "Recent graduate engineer with a passion in web development. Strong
          skills in HTML, CSS, JavaScript and frameworks such as ReactJS.
          Seeking opportunities to apply my knowledge and continue growing as a
          developer in a dynamic and innovative company."
        </h3>
        <div><button className=" btn2">Download Resume</button></div>
      </div>
      <div className="divExp">
        <h1 style={{color:"red"}}>Experience</h1>
        <p>
          Software Developer Intern (3 months)
       Utilized ReactJS to develop and maintain user-friendly features for multiple web applications,
       Implemented AGGrid to improve data visualization and manipulation for clients ,
       Worked with JSON and JavaScript to create dynamic and interactive user interfaces,
       Contributed to the team by providing creative solutions to complex problems and actively
       collaborating with team members to achieve project goals.
        </p>
      </div>

<div className="divskills">
  skills
  <div className="skills-container">
            <div className="skill-badge">
                <i className="devicon-html5-plain colored"></i>
                <h3>HTML5</h3>
            </div>
            <div className="skill-badge">
                <i className="devicon-css3-plain colored"></i>
                <h3>CSS3</h3>
            </div>
            <div className="skill-badge">
                <i className="devicon-javascript-plain colored"></i>
                <h3>JavaScript</h3>
            </div>
            <div className="skill-badge">
                <i className="devicon-react-original colored"></i>
                <h3>ReactJS</h3>
            </div>
        </div>
</div>
      <>
        <Footer />
      </>
    </div>
  );
};

export default AboutContent;
