import React from 'react';
import { motion } from 'framer-motion';

import ArchiveForm from '../components/ArchiveForm'
import Arrow from '../components/Arrow';
import Logo from '../components/Logo';
import '../style/main.css';


const Archive = ({setRecived, setData}) => {
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
      className="archive"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Arrow setRecived={setRecived}/>
      <Logo size={{width:'80px', height:'80px'}} preview={true}/>
      <ArchiveForm setData={setData} setRecived={setRecived}/>
    </motion.div>
  )
}
export default Archive;