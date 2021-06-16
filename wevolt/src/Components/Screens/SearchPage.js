//import React from 'react'
import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../../App'
import { Button, ButtonGroup } from '@material-ui/core'
import '../../SearchPage.css'
import StarIcon from '@material-ui/icons/Star';

import SearchResult from './SearchResult'

//add fetch requests to get the card

// function SearchPage() {

   //add fetch requests to get the card info
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
            
            setData(result.posts[3])
            console.log(result.posts)
            console.log(data)
        })
    },[])

// const heartPost = (id)=>{
//     fetch('/heart',{
//         method:"put",
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":"Bearer "+localStorage.getItem("jwt")
//         },
//         body:JSON.stringify({
//             postId:id
//         })
//     }).then(res=>res.json())
//     .then(result=>{
//                 console.log(result)
//         const newData = data.map(item=>{
//             if(item._id==result._id){
//                 return result
//             }else{
//                 return item
//             }
//         })
//         setData(newData)
//     }).catch(err=>{
//         console.log(err)
//     })
// }

// const postReview = (text, postId)=>{
//     fetch('/review',{
//         method:"put",
//         headers:{
//             "Content-Type":"application/json",
//             "Authorization":"Bearer "+localStorage.getItem("jwt")
//         },
//         body:JSON.stringify({
//             postId,
//             text
//         })
//     }).then(res=>res.json())
//     .then(result=>{
//         console.log(result)
//         const newData = data.map(item=>{
//             if(item._id == result._id){
//                 return result
//             }else{
//                 return item
//             }
//         })
//         setData(newData)
//     }).catch(err=>{
//         console.log(err)
//     })
// }

// const deletePost = (postid)=>{
//     fetch(`/deletepost/${postid}`,{
//         method:"delete",
//         headers:{
//             Authorization:"Bearer "+localStorage.getItem("jwt")
//         }
//     }).then(res=>res.json())
//     .then(result=>{
//         console.log(result)
//         const newData = data.filter(item=>{
//             return item._id !== result._id
//         })
//         setData(newData)
//     })
// }


    return (
       
        <div className='searchpage'>
      <div className='searchPage-info'>
          <h1>{data._id}</h1>
          
          
          
      
      </div>


      <div className='searchResult'>
      <div className='searchResult-info'>
          <div className='searchResult-infoTop'>
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
   </div>


</div>


    )
}

export default SearchPage
