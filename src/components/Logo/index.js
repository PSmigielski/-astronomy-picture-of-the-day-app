import React from 'react';
import './index.css';
import LogoSvg from '../../assets/logo.svg';

const Logo = ({preview}) => {
    let left,margin;
  if(preview){
    left = '50%'
    margin = '-58px'
  }
  const logoStyle = {
    left: left,
    marginLeft: margin,
  } 
  return(
    <img className="logo" style={logoStyle} src={LogoSvg} alt="logo"/>
  )
}


export default Logo;