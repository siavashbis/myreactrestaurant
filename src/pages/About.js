import React from "react";
import AboutImage from "../assets/masala.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${AboutImage})` }}
      ></div>
      <div className="aboutBottom">
        <h1>About Me</h1>
        <p>
          I am Siavash Mehraein, I'm a front-end web developer. <br></br>
          This is my first ReactJS project.
        </p>
      </div>
    </div>
  );
}

export default About;
