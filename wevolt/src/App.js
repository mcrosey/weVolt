import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import "./App.css"
import Home from './Components/Screens/Home'
import Header from './Components/Screens/Header'
import Footer from './Components/Screens/Footer'
import SearchPage from './Components/Screens/SearchPage'

function App() {
  return (
    <div className = "App">
      <Router>
        <Header />
        
        <Switch>
            <Route path="/search">
              <SearchPage />
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
