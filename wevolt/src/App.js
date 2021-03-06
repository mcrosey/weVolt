import React, {useEffect, createContext, useReducer, useContext} from 'react'
import { BrowserRouter, Switch, Route,  useHistory} from "react-router-dom"
import {reducer, intialState} from './Reducer/userReducer'
import Home from './Components/Screens/Home'
import Header from './Components/Screens/Header'
import Footer from './Components/Screens/Footer'
import SearchPage from './Components/Screens/SearchPage'
import Login from './Components/Screens/Login'
import Signup from './Components/Screens/Signup'
import ElectricMap from './Components/Screens/ElectricMap'
import CreateListing from './Components/Screens/CreateListing'
import Profile from './Components/Screens/Profile'
import UserProfile from './Components/Screens/UserProfile'
import SMS from './Components/Screens/SMS'
import "./App.css"

export const UserContext = createContext()


const Routing = () =>{
  const history = useHistory()
  const{dispatch} = useContext(UserContext)
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"))
    
    if(user){
      dispatch({type:"USER", payload:user})
      history.push('/')
    }else{
      history.push('/login')
    }
  },[])

return(
        
  <Switch>
      <Route path="/search">
        <SearchPage />
      </Route>
      
      <Route path="/login">
        <Login />
      </Route>
      
      <Route path="/signup">
        <Signup />
      </Route>

      <Route path="/maps">
        <ElectricMap />
      </Route>

      <Route path="/message">
        <SMS />
      </Route>

      <Route path="/createlisting">
        <CreateListing />
      </Route>

      <Route exact path="/profile">
        <Profile />
      </Route>

      <Route path="/profile/:userid">
        <UserProfile />
      </Route>

      <Route exact path="/">
        <Home />
      </Route>
    
  </Switch>

      
  )
}




function App() {

  const [state, dispatch] =useReducer( reducer, intialState)
  return (
    <UserContext.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <Header />
      <Routing />
      <Footer />
    </BrowserRouter>
    </UserContext.Provider>
  );
}

  

export default App;
