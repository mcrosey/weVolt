import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import CheckIcon from '@material-ui/icons/Check';
import RoomIcon from '@material-ui/icons/Room';
import '../../Mapbox.css'
import '../../Card.css'


function Map() {
  const [pins, setPins] = useState([]);
  const [viewport, setViewport] = useState({
    width: '90vw',
    height: '80vh',
    margin: '180px',
    latitude: 35.9606,
    longitude: -83.9207,
    zoom: 5
  });
const [selectedPins, setSelectedPin] =useState(null);  

  useEffect(()=>{
    const listener = e => {
      if(e.key === "Escape"){
        setSelectedPin(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.addEventListener("keydown", listener);
    };
  }, []);
    

  useEffect(()=>{
      fetch('/alllistings', {
          headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt")
          }
      }).then(res=>res.json())
      .then(result =>{
          console.log(result)
          setPins(result.posts)
      })
      console.log(pins)        
        
  },[setPins])

  return (

    <div className="mapbox">
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken="pk.eyJ1IjoibWNyb3NleSIsImEiOiJja3EwZHJ1MjQwM3d3MnF0ZWl1MGk0bmtpIn0.dKJRik0t3oT61z3djtOjnA"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapStyle="mapbox://styles/mcrosey/ckq1solmo1ol518qv9rsgtorg"
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

        {setPins ? (
        <Popup
        latitude={item.location.coordinates[1]}
        longitude={item.location.coordinates[0]}
        
        closeButton={true}
        closeOnClick={true}
        anchor="top" >
            <div className="indexcard">
              <label>Address</label>
              <h4 className="place">{item.address}</h4>
              <label>Recommend</label>
              <h4 className="rating"><CheckIcon />{item.happyface.length}</h4>
            </div>
        </Popup> 
        ) : null}
        </div>  
        ))}
        </ReactMapGL> 
    </div>
  );
}

export default Map
