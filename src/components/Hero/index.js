import React from "react";
import './index.css';

import axios from "axios";

const Hero = ({setData}) => {
  const handleClick = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => setData(res.data))  
  }
  return(
    <div className="hero">
      <h1 className="heroTitle">Astronomy Picture of the day</h1>
      <p className="heroText">Discover the cosmos! Each day a different image or photograph of our fascinating universe is featured, along with a brief explanation written by a professional astronomer.</p> 
      <div className="heroButtons">
        <button className="heroButton" onClick={handleClick}>see the picture</button>
        <button className="heroArchive">archive</button>
      </div>
    </div>   
  );
}

export default Hero;