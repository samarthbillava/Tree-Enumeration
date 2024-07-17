import React from "react";
import Navbar from "./navbar";

import Background2 from "../Assets/Background2.png"

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={Background2} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Automated tree enumeration for forest diversion
          </h1>
          <p className="primary-text">
            Van Ganaka is an open service for Tree Enumeration to provide access to visualization and interactive interfaces that allow users to explore and interpret the results easily.
          </p>
        </div>
        <div className="home-image-section"></div>
      </div>
    </div>
  );
};

export default Home;