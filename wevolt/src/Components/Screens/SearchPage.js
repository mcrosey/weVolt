import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../../App'
import Mapbox from './Mapbox'
import Card from './Card'
import '../../SearchPage.css'
import '../../Card.css'

const SearchPage = ()=>{
const [data, setData] = useState([])
const {state,dispatch} = useContext(UserContext)
useEffect(()=>{
    fetch('/alllistings', {
        headers:{
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        }
    }).then(res=>res.json())
    .then(result =>{
        setData(result.posts[0])
        console.log(result.posts)
        console.log(data)
    })
},[])


return (
            
    <div className="mapview">
        <Mapbox />
        <div className="blankspace">
              
          </div>
          <div class="container">
      <div className="carddisplay" >
          <Card />
          <div />
          </div>
      </div>
    </div>
    )
}

export default SearchPage
