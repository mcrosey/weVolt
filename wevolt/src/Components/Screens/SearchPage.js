//import React from 'react'
import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../../App'
// import { Button, ButtonGroup } from '@material-ui/core'
import '../../SearchPage.css'
import StarIcon from '@material-ui/icons/Star';
import Mapbox from './Mapbox'
import Card from './Card'
import { Grid,  Button} from "@material-ui/core";


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

        <div className='searchpage'>
      <div className='searchPage-info'>
   
      </div>
      {/* <div class="row" > */}
          <div class="container">
      <div className="carddisplay" >
      
          <Card />
          {/* </div> */}
          </div>
      </div>

      {/* <div className='searchResult'>
      <div className='searchResult-info'>
          <div className='searchResult-infoTop'>
          <p>Host Name:<br></br>{state?state.userName: "loading"}</p>
              <p>{data.address}</p>
              <h3>{data.description}</h3>
              <p>___</p>
              <p>{data.review}</p>
              
              <Button
          variant="outlined">Review</Button>

          </div>
          <div className='searchResult-infoBottom' >
          
          
              <div className="searchResult-stars">
                  <StarIcon
                  className="searchResult-star" />
                   <p>
                       <strong>{data.heart}</strong>
                   </p>
              </div>
               <div className='searchResult-price'>
                   <h2>{data.price}</h2>
               </div>
           </div>        
      </div>
      <img src={data.photo} alt="" />
   </div> */}

</div>
</div>


    )
}

export default SearchPage
