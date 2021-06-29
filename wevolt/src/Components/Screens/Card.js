import React, {useState, useEffect, useContext} from 'react'
import {UserContext} from '../../App'
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import {Link} from 'react-router-dom'
import '../../Card.css'


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
        
              <div className="home">
                  {
                data.map(item=>{
                    return(
                        <div className="card home-card" key={item._id}>
                <h5><Link to={item.postedBy._id !== state._id?"/profile/"+item.postedBy._id : "/profile"}>{item.postedBy.userName}</Link> 
                </h5>
                
                <div className="card-image">
                    <img src={item.photo} alt="charger display"/>
                </div>
                    
                    <div className="card-content">
                        <CheckIcon
                            className="searchResult-recommend" 
                            onClick={()=>{happyPost(item._id)}}
                        />
                        <h6 className="rec" >{item.happyface.length} Would recommned</h6>

                        <ClearIcon
                            className="searchResult-notrecommend" 
                            onClick={()=>{sadPost(item._id)}}
                        />
                        <h6 className="no-rec" >{item.sadface.length} Would not recommend</h6>
                    </div>    

                    <div className="address-display"> 
                        <h5>{item.address}</h5>
                    </div>    

                    <div className="description-display">
                        <h4>{item.description}</h4>
                    </div>   

                        {
                            item.reviews.map(record=>{
                                return(
                                    <h6 className="userName" 
                                    key={record._id}>
                                        <span style={{fontWeight:"500"}}>
                                            {record.postedBy.userName}
                                        </span>{record.text}</h6>
                                )
                            })
                        }

                    <form onSubmit={(e)=>{
                        e.preventDefault()
                        leaveReview(e.target[0].value, item._id)
                        }}>

                        <input type="text" placeholder="leave review"/>
                    </form>
                </div>
               
                )
            })
        }  

        
        </div>
    )



        
}

export default Card
