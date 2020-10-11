import React from "react";
import '../style/App.css';

const Hero = () => {
  return(
    <div className="hero">
      <h1 className="heroTitle">Astronomy Picture of the day</h1>
      <p className="heroText">Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p> 
      <div className="heroButtons">
        <button className="heroButton">see the photo</button>
        <button className="heroArchive">archive</button>
      </div>
    </div>   
  );
}

export default Hero;