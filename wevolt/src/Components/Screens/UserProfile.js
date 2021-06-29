import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../App';
import {useParams, Link} from 'react-router-dom'
import '../../Profile.css'

function UserProfile() {
        const [userProfile, setUserProfile] = useState([null])
        const {state} = useContext(UserContext)
        const {userid} = useParams()
        useEffect(()=>{
            fetch(`/user/${userid}`,{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json())
            .then(result=>{
                setUserProfile(result.posts[0])
                            
            })
                console.log(userProfile)    
},[])
console.log(userProfile)

return (

    <>
    {userProfile ? 
 
   <div className='searchpage'>
      <div className='searchPage-info'> 
    </div>
      <div className='searchResult'>
      <div className='searchResult-info' key={userProfile._id}>
          <div className='searchResult-infoTop'>
              <p>{userProfile.address}</p>
              <h3>{userProfile.description}</h3>
              <p>___</p>
              <Link to="/message">
              <h5>Contact: {userProfile.contact}</h5></Link>
              <div className='review-info'>
              </div>
          </div>
          <div className='searchResult-infoBottom' >
               <div className='searchResult-price'>
                   <h2>{userProfile.price}</h2>
               </div>
           </div>        
      </div>
      <img src={userProfile.photo} alt="" />
   </div>


</div>
: <h3>waiting</h3> }
</>        
    )
}

export default UserProfile
