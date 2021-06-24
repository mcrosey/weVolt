import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../../App'
import StarIcon from '@material-ui/icons/Star';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import {Link} from 'react-router-dom'


function Card({source, title, description, price}) {

    const [data, setData] = useState([])
    const {state, dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/alllistings', {
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result =>{
            console.log(result)
            setData(result.posts)
        })
    },[])
    const happyPost = (id)=>{
        fetch('/happyface',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result=>{
                  console.log(result)
          const newData = data.map(item=>{
              if(item._id==result._id){
                  return result
              }else{
                  return item
              }
          })
          setData(newData)
        }).catch(err=>{
            console.log(err)
        })
  }

  const sadPost = (id)=>{
    fetch('/sadface',{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            postId:id
        })
    }).then(res=>res.json())
    .then(result=>{
              console.log(result)
      const newData = data.map(item=>{
          if(item._id==result._id){
              return result
          }else{
              return item
          }
      })
      setData(newData)
    }).catch(err=>{
        console.log(err)
    })
}
  
const leaveReview = (text, postId)=>{
    fetch('/review',{
        method:"put",
        headers:{
            "Content-Type":"application/json",
            "Authorization":"Bearer "+localStorage.getItem("jwt")
        },
        body:JSON.stringify({
            postId,
            text
        })
    }).then(res=>res.json())
    .then(result=>{
        console.log(result)
        const newData = data.map(item=>{
            if(item._id === result._id){
                return result
            }else{
                return item
            }
        })
        setData(newData)
    }).catch(err=>{
        console.log(err)
    })
}


    return (
        
              <div className="home">{
                data.map(item=>{
                    return(
                        <div className="card home-card" key={item._id}>
                <h5><Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id : "/profile"}>{item.postedBy.userName}</Link> 
                </h5>
                
  
                <div className="card-image">
                    <img src={item.photo} alt="charger display"/>
                </div>
                    <div className="card-content">
                    <InsertEmoticonIcon
                  className="searchResult-star" 
                    onClick={()=>{happyPost(item._id)}}
                    />
                    <h6>{item.happyface.length} Recommend this charger</h6>

                    <SentimentVeryDissatisfiedIcon
                  className="searchResult-star" 
                    onClick={()=>{sadPost(item._id)}}
                    />
                    <h6>{item.sadface.length} Would not recommend</h6>
                    
                        <h5>{item.address}</h5>
                        <h4>{item.description}</h4>
                        {
                        item.reviews.map(record=>{
                            return(
                                <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.userName}</span>{record.text}</h6>
                            )
                        })
                    }
                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        leaveReview(e.target[0].value, item._id)
                    }}>
                        <input type="text" placeholder="review"/>
                    </form>
                    </div>
                </div>
                    )
                })
            }  


        </div>
    )



        
}

export default Card
