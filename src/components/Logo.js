import React from 'react';
import '../style/App.css';
import LogoSvg from '../assets/logo.svg';

const Logo = () => (
    <img className="logo" src={LogoSvg} alt="logo"/>
);

export default Logo;