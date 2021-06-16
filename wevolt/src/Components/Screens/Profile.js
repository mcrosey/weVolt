import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../App';
import StarIcon from '@material-ui/icons/Star';
import { Button, ButtonGroup } from '@material-ui/core'


import '../../Profile.css'



function Profile() {
        const [mypics, setPics] = useState([])
        const {state,dispatch} = useContext(UserContext)
        useEffect(()=>{
            fetch('/mylisting',{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json())
            .then(result=>{
                setPics(result.mypost[0])
                console.log(result)
                console.log(mypics)
            })
    
},[])
        

return (

//this needs to be updated to display actual user name
      <div className='searchpage'>
      <div className='searchPage-info'>
          
          
          
          
      
      </div>


      <div className='searchResult'>
      <div className='searchResult-info'>
          <div className='searchResult-infoTop'>
          <h4>{state?state.userName: "loading"}</h4>
              <p>{mypics.address}</p>
              <h3>{mypics.description}</h3>
              <p>___</p>
              <p>{mypics.reviews}Reviews</p>
              
              <Button
          variant="outlined">Leave Review</Button>

          </div>
          <div className='searchResult-infoBottom' >
          
          
              <div className="searchResult-stars">
                  <StarIcon
                  className="searchResult-star" />
                   <p>
                       <strong>{mypics.heart}</strong>
                   </p>
              </div>
               <div className='searchResult-price'>
                   <h2>{mypics.price}</h2>
               </div>
           </div>        
      </div>
      <img src={mypics.photo} alt="" />
   </div>


</div>

        
  
    )
}

export default Profile
