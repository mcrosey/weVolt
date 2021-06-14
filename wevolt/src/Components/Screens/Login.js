import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
//import {UserContext } from '../../App'
import M from 'materialize-css'
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import { AccountCircle, LockRounded } from "@material-ui/icons"
//import '../../Login.css'

const Login = ()=>{
    //const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password, setPassword] = useState("")
    const [userName, setUserName] = useState("")
    const PostData = ()=>{
        fetch('/signin',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                userName,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error, classes:"#d50000 red accent-4"})
            }
            else{
                localStorage.setItem("jwt", data.token)
                localStorage.setItem("user", JSON.stringify(data.user))
                //dispatch({type:"USER", payload:data.user})
                M.toast({html:"signed in successfully", classes: "#66bb6a green lighten-1"})
                history.push('/')
            }
        }).catch(err=>{
            console.log(err)
        })

    }
    return(
        <div>
            <Grid container style={{minHeight: '100vh'}}>
                <Grid item xs={12} sm={6}>
                    <img src="https://images.unsplash.com/photo-1594535182308-8ffefbb661e1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3RyaWMlMjBjYXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" 
                    style={{ width: '100%', height: '100%', objectFit: "cover"}} 
                    alt="brand"
                    />
                </Grid>
                <Grid 
                    container
                    item 
                    xs={12} 
                    sm={6} 
                    alignItems="center"
                    direction="column"
                    justify="space-between"
                    style={{padding: 10}}
                >
                    <div />
                    <div 
                    style={{ display: "flex", 
                        flexDirection: "column", 
                        maxWidth: 400, 
                        minWidth: 300,}}
                    >
                        <Grid container justify="center">
                            <img src="https://i.ibb.co/pft9yYR/IMG-4403.jpg" 
                            width={200}
                            alt="logo"
                            />
                        </Grid>
                        <TextField 
                            label="Username" 
                            margin="normal" 
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                            InputProps={{ startAdornment: <InputAdornment><AccountCircle /></InputAdornment>}}/>
                            
                        <TextField 
                            label="Password" 
                            margin="normal" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            InputProps={{ startAdornment: <InputAdornment><LockRounded /></InputAdornment>}}/>
                            
                        <div style={{ height:20}} />
                        
                        <Button 
                            variant="contained"
                            onClick={()=>PostData()}
                            >Log In
                        </Button>

                        <div style={{ height:20}} />
                        
                        <Link to="/signup">
                            <Button 
                                > Join the community today
                            </Button>
                        </Link>

                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    );
        
                
                
};

export default Login