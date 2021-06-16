import React, {useEffect, createContext, useReducer, useContext} from 'react'
import { BrowserRouter, Switch, Route, Router,  useHistory} from "react-router-dom"
import Axios from 'axios'
import "./App.css"
import Home from './Components/Screens/Home'
import Header from './Components/Screens/Header'
import Footer from './Components/Screens/Footer'
import SearchPage from './Components/Screens/SearchPage'
import Login from './Components/Screens/Login'
import Signup from './Components/Screens/Signup'
import ElectricMap from './Components/Screens/ElectricMap'
import CreateListing from './Components/Screens/CreateListing'
import GMap from './Components/Screens/GoogleMap'
import Profile from './Components/Screens/Profile'
import {reducer, intialState} from './Reducer/userReducer'
import ElectricMaps from './Components/Screens/ElectricMap'
export const UserContext = createContext()


const Routing = () =>{
  const history = useHistory()
  const{state, dispatch} = useContext(UserContext)
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

            <Route path="/gmap">
              <GMap />
            </Route>

            <Route path="/createlisting">
              <CreateListing />
            </Route>

            <Route path="/profile">
              <Profile />
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
