import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import { motion } from 'framer-motion'

import Arrow from '../components/Arrow';
import DataContainer from '../components/DataContainer';
import Logo from '../components/Logo';
import Loader from '../components/Loader';
import '../style/main.css';

const PhotoView = ({ data, setRecived, recived }) => {
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
      className="photoView"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Arrow setRecived={setRecived}/>
      <Logo preview="true"/>
{recived ? <div className="dataWrapper">
        <div className="pictureContaier">
          {data.media_type==="video" ? 
            <ResponsiveEmbed src={data.url} allowFullScreen/>
          : <img className="dataImage" src={data.url} alt={data.title ? data.title : 'alternative'}/ >}
        </div>
        <DataContainer  data={ data }/>
      </div> : <Loader />}
    </motion.div>
  )   
}

export default PhotoView;