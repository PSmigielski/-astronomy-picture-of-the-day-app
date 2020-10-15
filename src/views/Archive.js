import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

import ArchiveGallery from '../components/ArchiveGallery'
import Arrow from '../components/Arrow';
import Logo from '../components/Logo';
import '../style/main.css';


const Archive = ({setRecived}) => {
  const [data, setData] = useState([])
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
  let result = [];
  const getData = () =>{
    const now = new Date();
    for (var d = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate()+1); d <= now; d.setDate(d.getDate() + 1)) {
      let date = new Date(d);
      let fulldate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=0ZkA7ov8qU0A0ZgQzu4vOj3cODyJiCYdXXt3sAdj&date=${fulldate}`)
        .then(res => {
          result.push(res.data)
        })
        .catch(err => {
          console.log(err);
        })
    }
    setData(result)
    console.log(result)
  }
  useEffect(()=>{
    getData()
  },[])
  return(
    <motion.div 
      className="archiveContainer"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Arrow setRecived={setRecived}/>
      <Logo size={{width:'80px', height:'80px'}} preview={true}/>
      <ArchiveGallery data={data}/>
    </motion.div>
  )
}
export default Archive;