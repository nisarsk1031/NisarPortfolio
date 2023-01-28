import "./AboutContentStyles.css";
import React from "react";
import { Footer } from "../components/Footer";

const AboutContent = () => {
  return (
    <div className="mainContainer">
      <div className="maindivAbout">
        <p>I am,</p>
        <h1>Nisar Shaikh</h1>
        <h3>
          "Recent graduate engineer with a passion in web development. Strong
          skills in HTML, CSS, JavaScript and frameworks such as ReactJS.
          Seeking opportunities to apply my knowledge and continue growing as a
          developer in a dynamic and innovative company."
        </h3>
        <button>Download Resume</button>
      </div>
      <div className="divExp">
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

</div>
      <>
        <Footer />
      </>
    </div>
  );
};

export default AboutContent;
