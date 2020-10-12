import React from 'react'

const DataContainer = ({data}) => {
    return(
        <div className="dataContainer">
            <h1 className="dataHeader">title</h1>
            <p className="dataDate">data</p>
            <p className="dataExplanation">expanation</p>
            {data.copyright ? <p className="dataCopyright">copyright</p>: ''}
        </div>
    )
}

export default DataContainer;