import React from "react";
//import components
import Logo from '../components/Logo';
import BlobLeft from '../components/BlobLeft';
import BlobRight from '../components/BlobRight';
import Hero from '../components/Hero';
import {motion} from 'framer-motion';

const Home = ({setData, setRecived}) => {
  const containerVariants = {
    hidden: {
      opacity:0,
    },
    visible: {
      opacity: 1,
      transition: { delay: .2, duration: 1.5}
    },
    exit: {
      y: '-100vh',
      transition: {ease: 'easeInOut'}
    }
  }
  return(
    <motion.div 
      className="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >   
      <Logo />
      <BlobLeft /> 
      <BlobRight /> 
      <Hero setData={setData} setRecived={setRecived}/>
    </motion.div>
  )
}

export default Home;