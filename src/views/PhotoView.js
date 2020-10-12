import React from 'react';
import Arrow from '../components/Arrow';
import DataContainer from '../components/DataContainer';
import Logo from '../components/Logo';
import '../style/App.css';

const PhotoView = ({ data }) => {
  return(
    <div className="photoView">
      <Arrow />
      <Logo preview="true"/>
      <div className="dataWrapper">
        {data.media_type==="video" ? 
          <div className="--aspect-ratio: 16/9;">
            <iframe title={data.title} src={data.url} frameBorder="0" allowFullScreen></iframe>
          </div>
        : <img className="dataImage" src={data.url} alt={data.title ? data.title : 'alternative'}/ >}
        <DataContainer  data={ data }/>
      </div>
    </div>
  )   
}

export default PhotoView;