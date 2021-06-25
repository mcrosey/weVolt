import React from 'react'
import '../../ElectricMap.css'

function ElectricMap() {
    return (
        <div className='mappage'>
            <h2> Not finding a community charger?</h2>
            <h5>Search the many public level 3 charging locations below</h5>

            <div className='map-view'>
            <iframe src="https://map.openchargemap.io/?mode=embedded" 
            allow="geolocation" 
            frameBorder="0" 
            direction="column"
            width="100%" 
            height="450px"
            >
            </iframe>
            </div>
        </div>
    )
}

export default ElectricMap
