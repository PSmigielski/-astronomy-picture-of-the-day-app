import React from 'react';

import './index.css'

const ArchiveGallery = ({ data }) => {
  let result = data;
  console.log(result[0]);
  console.log(result.length);

  return(
    <div className="archiveGallery">
    </div>
  )
}

export default ArchiveGallery;