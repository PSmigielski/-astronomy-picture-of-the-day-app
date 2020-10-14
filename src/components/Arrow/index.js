import React from 'react';
import { Link } from "react-router-dom";

import './index.css';

const Arrow = ({ setRecived }) => {
  const handleClick = () => setRecived(false)
  return(
    <Link to="/" className="arrowContainer">
      <svg width="36" onClick={handleClick} className="arrow" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M31.5 16.5H10.245L15.615 11.115L13.5 9L4.5 18L13.5 27L15.615 24.885L10.245 19.5H31.5V16.5Z" fill="black"/>
      </svg>
    </Link>
  )
}

export default Arrow;