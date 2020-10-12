import React from 'react';
import Arrow from '../components/Arrow';
import DataContainer from '../components/DataContainer';
import Logo from '../components/Logo';

const PhotoView = ({ data }) => {
  return(
    <div className="photoView">
      <Arrow />
      <Logo preview="true"/>
      <div className="dataWrapper">
        <img src={'https://apod.nasa.gov/apod/image/2010/PinnaclesGalaxy_Goh_1080.jpg'} alt={data.title ? data.title : 'alternative'}/ >
        <DataContainer  data={ data }/>
      </div>
    </div>
  )   
}

export default PhotoView;