import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Background1 from "../Assets/Background1.png"

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={Background1} alt="" />
      </div>
      <div className="about-section-image-container"></div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Van Ganaka refers to "Forest Calculator"
        </h1>
        <p className="primary-text">
          Van-Ganaka embodies the essence of its name by employing advanced image analytics to unravel the secrets hidden within the green canopy. Through meticulous mapping and analysis, Van-Ganaka empowers stakeholders to make informed decisions regarding forest land diversion, fostering a future where conservation and development coexist in harmony
        </p>
        <p className="primary-text">
        Van-Ganaka" emerges as a beacon of innovation, blending technology with environmental stewardship. 
        </p>
        <div className="about-buttons-container">
          <a href="https://moef.gov.in/moef/" target="_blank" rel="noreferrer"><button className="secondary-button">Learn More</button></a>
          <a href="https://www.youtube.com/watch?v=_dWJVHIE9S8"  target="_blank" rel="noreferrer"><button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default About;