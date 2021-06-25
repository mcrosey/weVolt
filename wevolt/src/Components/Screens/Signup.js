import React, {useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import M from 'materialize-css'
import { Grid, TextField, Button, InputAdornment } from "@material-ui/core";
import { AccountCircle, LockRounded, Email } from "@material-ui/icons"
import CreateIcon from '@material-ui/icons/Create';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';

const Signup = ()=>{
    const history = useHistory()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
         M.toast({html: "invalid e-mail", classes:"#d50000 red accent-4"})
         return
        }
        fetch('/signup',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                firstName,
                lastName,
                email,
                phoneNumber,
                userName,
                password
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error, classes:"#d50000 red accent-4"})
            }
            else{
                M.toast({html:data.message, classes: "#66bb6a green lighten-1"})
                history.push('/login')
            }
            console.log(data)
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
                            label="First Name" 
                            margin="normal" 
                            value={firstName}
                            onChange={(e)=>setFirstName(e.target.value)}
                            InputProps={{ startAdornment: <InputAdornment><AccountCircle />
                                </InputAdornment>}}/>
                    
                        <TextField 
                            label="Last Name" 
                            margin="normal" 
                            value={lastName}
                            onChange={(e)=>setLastName(e.target.value)}
                            InputProps={{ startAdornment: <InputAdornment><AccountCircle />
                                </InputAdornment>}}/>
                            
                        <TextField 
                            label="Email" 
                            margin="normal" 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            InputProps={{ startAdornment: <InputAdornment><Email />
                                </InputAdornment>}}/>
                            
                        <TextField 
                            label="Phone Number" 
                            margin="normal" 
                            value={phoneNumber}
                            onChange={(e)=>setPhoneNumber(e.target.value)}
                            InputProps={{ startAdornment: <InputAdornment><PhoneIphoneIcon />
                                </InputAdornment>}}/>
                            

                        <TextField 
                            label="Create Username" 
                            margin="normal" 
                            value={userName}
                            onChange={(e)=>setUserName(e.target.value)}
                            InputProps={{ startAdornment: <InputAdornment><CreateIcon />
                                </InputAdornment>}}/>   
                           
                        <TextField 
                            label="Create Password" 
                            margin="normal" 
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            InputProps={{ startAdornment: <InputAdornment><LockRounded />
                                    </InputAdornment>}}/>
                            
                        <div style={{ height:5}} />
                        <Button 
                            variant="contained"
                            onClick={()=>PostData()}
                        >
                            Sign Up
                        </Button>
                        
                        <div style={{ height: 10}} />
                        <Link to="/login">
                            <Button> Already a member?</Button>
                        </Link>
                    </div>
                    <div />
                </Grid>
            </Grid>
        </div>
    );
        
                
                
};


export default Signup