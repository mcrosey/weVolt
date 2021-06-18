import RoomIcon from '@material-ui/icons/Room';
import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';




function Map() {
  const [pins, setPins] = useState([]);
  const [viewport, setViewport] = useState({
    width: '50vw',
    height: '50vw',
    latitude: 35.9606,
    longitude: -83.9207,
    zoom: 4
  });

  useEffect(()=>{
    // const getPins = async () =>{
        fetch('/alllistings', {
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result =>{
            console.log(result)
            setPins(result.posts)
        })
    
        
        
    // };
    // getPins(pins)
  },[setPins])
  //console.log(pins)


  return (

    <div className="mapbox">
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoibWNyb3NleSIsImEiOiJja3EwZHJ1MjQwM3d3MnF0ZWl1MGk0bmtpIn0.dKJRik0t3oT61z3djtOjnA"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      //create and add mapstyle, under account, publish then copy link
    >
        {pins.map(item=>(
            
            
            <div className='marker' key={item._id}>
        <Marker
            latitude={item.location.coordinates[1]}
            longitude={item.location.coordinates[0]}
            offsetLeft={-20}
            offsetTop={-10}
        >
            
            <RoomIcon style={{fonstsize:viewport.zoom * 7, color: 'blue',}} />
            </Marker> 
            {/* <Popup
            latitude={37.7577}
            longitude={-122.4376}
            closeButton={true}
            closeOnClick={false}
            anchor="top" >
                <div>you are here</div>
            </Popup>  */}
            </div>  
            ))}
           </ReactMapGL> 
    </div>
  );
}

export default Map
