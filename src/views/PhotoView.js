import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';

import Arrow from '../components/Arrow';
import DataContainer from '../components/DataContainer';
import Logo from '../components/Logo';
import '../style/main.css';

const PhotoView = ({ data, setRecived }) => {
  return(
    <div className="photoView">
      <Arrow setRecived={setRecived}/>
      <Logo preview="true"/>
      <div className="dataWrapper">
        <div className="pictureContaier">
          {data.media_type==="video" ? 
            <ResponsiveEmbed src={data.url} allowFullScreen/>
          : <img className="dataImage" src={data.url} alt={data.title ? data.title : 'alternative'}/ >}
        </div>
        <DataContainer  data={ data }/>
      </div>
    </div>
  )   
}

export default PhotoView;