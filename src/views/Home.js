import React from "react";
//import components
import Logo from '../components/Logo';
import BlobLeft from '../components/BlobLeft';
import BlobRight from '../components/BlobRight';
import Hero from '../components/Hero';

const Home = ({setData, setRecived}) => {
  return(
    <div className="home">
      <Logo />
      <BlobLeft /> 
      <BlobRight /> 
      <Hero setData={setData} setRecived={setRecived}/>
    </div>
  )
}

export default Home;