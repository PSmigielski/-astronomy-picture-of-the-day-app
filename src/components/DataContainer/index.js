import React from 'react'
import './index.css'

const DataContainer = ({data}) => {
    return(
        <div className="dataContainer">
            <h1 className="dataHeader">{data.title}</h1>
            <p className="dataDate">{data.date}</p>
            <p className="dataExplanation">{data.explanation}</p>
            {data.copyright ? <p className="dataCopyright">{`©${data.copyright}`}</p>: ''}
        </div>
    )
}

export default DataContainer;