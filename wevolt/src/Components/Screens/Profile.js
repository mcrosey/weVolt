import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../../App';
import '../../Profile.css'


function Profile() {
    const [mypics, setPics] = useState([null])
    const [happyfaceCount, sethappyFaceCount] = useState("")
    const [reviewCount, setreviewCount] = useState("")
    const {state} = useContext(UserContext)
    useEffect(()=>{
        fetch('/mylisting',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setPics(result.mypost[0]);
                if(mypics && mypics.happyface && mypics.happyface.length > 0){
                    sethappyFaceCount(mypics.happyface.length)
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
            
},[happyfaceCount],[reviewCount])

return (
    <>
    
        {mypics ? 
      <div className='searchpage'>
      <div className='searchPage-info'> 
      </div>
      <div className='searchResult'>
      <div className='searchResult-info' key={mypics._id}>
          <div className='searchResult-infoTop'>
          <h4>{state?state.userName: "loading"}</h4>
              <p className="address">{mypics.address}</p>
              <h3>{mypics.description}</h3>
              <p>___</p>
              <div className='review-info'>
              <p>{reviewCount}Reviews will display here</p>
              </div>
          </div>
          <div className='searchResult-infoBottom' >
              <div className="searchResult-stars">
                  <h5>recommend</h5>
                  {happyfaceCount}
              </div>
               <div className='searchResult-price'>
                   <h2>{mypics.price}</h2>
               </div>
           </div>        
      </div>
      <img src={mypics.photo} alt="" />
   </div>
</div>
: <h3>loading</h3>}
</>        
  
    )
}

export default Profile
