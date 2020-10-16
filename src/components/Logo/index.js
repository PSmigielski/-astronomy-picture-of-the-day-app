import React from 'react';
import './index.css';
import LogoSvg from '../../assets/logo.svg';

const Logo = ({ preview, size }) => {
  let left,margin;
  if(preview){
    left = '50%'
    margin = '-58px'
  }
  const logoStyle = {
    left: left,
    marginLeft: margin,
  } 
  const logoSize = {
    width: size ? size.width : '',
    height: size ? size.height: '116px'
  }
  return(
    <div className="logoContainer" style={logoStyle}>
      <img className="logo" src={LogoSvg} style={logoSize} alt="logo"/>
      {size ? <p className="logoLabel">APOD Archive</p>: ''}
    </div>
  )
}


export default Logo;