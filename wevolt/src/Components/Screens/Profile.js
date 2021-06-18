import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../App';
import StarIcon from '@material-ui/icons/Star';
import { Button } from '@material-ui/core'
import '../../Profile.css'



function Profile() {
    //const [userProfile,setProfile] = useState(null)

        const [mypics, setPics] = useState([])
        const [heartCount, setheartCount] = useState("")
        const [reviewCount, setreviewCount] = useState("")
        const {state} = useContext(UserContext)
        useEffect(()=>{
            let isMounted = true
            fetch('/mylisting',{
                headers:{
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                }
            }).then(res=>res.json())
            .then(result=>{
                // console.log(result)
                setPics(result.mypost[0]);
                if(mypics && mypics.heart && mypics.heart.length > 0){
                    setheartCount(mypics.heart.length)
                }
                else{
                    console.log("nope")
                };
                if(mypics && mypics.review && mypics.review.length > 0){
                    setreviewCount(mypics.review.length)
                }
                else{
                    console.log("nope")
                }
                console.log(result)
            })
            // console.log(mypics)
            // console.log(mypics.reviews)
            // console.log(mypics.reviews.length)

            
},[heartCount],[reviewCount])
// console.log(mypics)
// console.log(mypics.reviews)
// console.log(mypics.address)
// console.log(mypics.location)
//console.log(mypics.location.coordinates)
//console.log(mypics.location.coordinates.length)
//console.log(mypics.reviews.length)

return (
    <>
    {/* {!userProfile ?  */}
        
        
      <div className='searchpage'>
      <div className='searchPage-info'> 
      </div>
      <div className='searchResult'>
      <div className='searchResult-info' key={mypics._id}>
          <div className='searchResult-infoTop'>
          <h4>{state?state.userName: "loading"}</h4>
              <p>{mypics.address}</p>
              <h3>{mypics.description}</h3>
              <p>___</p>
              <div className='review-info'>
              <p>{reviewCount}Reviews will display here</p>
              
              </div>
              
              <Button
          variant="outlined">Leave Review</Button>

          </div>
          <div className='searchResult-infoBottom' >
          
          
              <div className="searchResult-stars">
                  <StarIcon
                  className="searchResult-star" />
                   <p> 
                     <strong>
                         
                        {heartCount}
                    </strong>  
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

{/* : <h2>loading...!</h2>} */}
</>        
  
    )
}

export default Profile
