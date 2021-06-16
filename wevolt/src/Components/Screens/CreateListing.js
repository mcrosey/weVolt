import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import M from 'materialize-css'


const CreateListing = ()=>{
    const history = useHistory()
    const [address, setAddress] = useState ("")
    const [description, setDescription] = useState ("")
    const [price, setPrice] = useState ("")
    const [image, setImage] = useState ("")
    const [url, setUrl] = useState ("")
    useEffect(()=>{
        if(url){
            fetch("/createlisting", {
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    address,
                    description,
                    price,
                    pic:url
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.error){
                    M.toast({html: data.error, classes:"#d50000 red accent-4"})
                }
                else{
                    M.toast({html:"posted successfully", classes: "#66bb6a green lighten-1"})
                    history.push('/profile')
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    },[url])

    const postDetails = ()=>{
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "wevolt")
        data.append("cloud_name", "mcrosey")
        fetch("https://api.cloudinary.com/v1_1/mcrosey/image/upload", {
            method:"post",
            body: data
        })
        .then(res=>res.json())
        .then(data=>{
            setUrl(data.url)
        })
        .catch(err=>{
            console.log(err)
        })
        
    }
        

    return (
        <div className="card input-filed"
        style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center",
            backgroundColor:"white"
        }}
        >
            <input 
            type="text" 
            placeholder="address" 
            value={address}
            onChange={(e)=>setAddress(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="description" 
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            />
            <input 
            type="text" 
            placeholder="price" 
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
            />
            <div className="file-field input-field">
            <div className="btn #00796b teal darken-2">
                <span>Upload Image</span>
                <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            
            </div>
            <button className="btn waves-effect waves-light #00796b teal darken-2"
            onClick={()=>postDetails()}
            >
                    Post
                </button>
            
        </div>
    )

}

export default CreateListing