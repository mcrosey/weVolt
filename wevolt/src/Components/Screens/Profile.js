import { SettingsSystemDaydreamTwoTone } from '@material-ui/icons';
import Axios from 'axios'
import React, {useContext, useEffect, useState} from 'react';
import { AssignedAddOnExtensionInstance } from 'twilio/lib/rest/api/v2010/account/incomingPhoneNumber/assignedAddOn/assignedAddOnExtension';
import { UserContext } from '../../App';
import '../../Profile.css'


function Profile({url}) {
    const [data, setData] = useState([null])
    
    const {state} = useContext(UserContext)
    useEffect(()=>{
        let mounted = true;
        const loadData = async ()=>{
        const response = await Axios.get('/mylisting',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        });
        if (mounted) {
            setData(response.data);
        }
    };
    loadData();
    
    return () =>{
        mounted = false;
    };
}, [url]);

if(!data){
    return <div>Loading data </div>;
}
console.log(data)
// return <div>{JSON.stringify(data)}</div>;
// }

//         }).then(res=>res.json())
//         .then(result=>{
//             setPics(result.mypost[0]);
//                 if(mypics && mypics.happyface && mypics.happyface.length > 0){
//                     sethappyFaceCount(mypics.happyface.length)
//                 }
//                 else{
//                     console.log("nope")
//                 };
//                 if(mypics && mypics.review && mypics.review.length > 0){
//                     setreviewCount(mypics.review.length)
//                 }
//                 else{
//                     console.log("nope")
//                 }
//                 console.log(result)
//             })
            
// },[happyfaceCount],[reviewCount])

return (
    
    
      
      <div className='searchpage'>
      <div className='searchPage-info'> 
      </div>
      <div className='searchResult'>
      <div className='searchResult-info' key={data._id}>
          <div className='searchResult-infoTop'>
          <h4>{state?state.userName: "loading"}</h4>
              <p className="address">{data.address}</p>
              <h3>{data.description}</h3>
              <p>___</p>
              <div className='review-info'>
              {/* <p>{reviewCount}Reviews will display here</p> */}
              </div>
          </div>
          <div className='searchResult-infoBottom' >
              <div className="searchResult-stars">
                  <h5>recommend</h5>
                  {/* {happyfaceCount} */}
              </div>
               <div className='searchResult-price'>
                   <h2>{data.price}</h2>
               </div>
            </div>        
       </div>
      <img src={data.photo} alt="" />
   </div>
 </div>

       
  
) 
}    


export default Profile
