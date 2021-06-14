import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./App.css"
import Home from './Components/Screens/Home'
import Header from './Components/Screens/Header'
import Footer from './Components/Screens/Footer'
import SearchPage from './Components/Screens/SearchPage'
import Login from './Components/Screens/Login'
import Signup from './Components/Screens/Signup'
import GoogleMaps from './Components/Screens/GoogleMaps'
import CreateListing from './Components/Screens/CreateListing'
import GenericInfo from './Components/Screens/GenericInfo'


function App() {
  return (
    <div className = "App">
      <Router>
        <Header />

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
              <GoogleMaps />
            </Route>

            <Route path="/genericinfo">
              <GenericInfo />
            </Route>

            <Route path="/createlisting">
              <CreateListing />
            </Route>

            <Route path="/">
              <Home />
            </Route>
          
        </Switch>
        <Footer />

      </Router>
      
    </div>
  );
}

export default App;
