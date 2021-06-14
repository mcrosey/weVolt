import React from 'react'
import '../../Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import { Avatar,} from "@material-ui/core";
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className= 'header'>
            <Link to="/">
            <img
            className="header-icon"
            src="https://i.ibb.co/pft9yYR/IMG-4403.jpg"          
            alt="logo"
        />    
        </Link>  
           <div className='header-center'>
               <input type="text" />
               <SearchIcon />
               </div> 

               <div className= "header-right">
                   
                   <p>Share your volts</p>
                   
                   <LanguageIcon />
                   <Link to="login">
                   <Avatar />
                   </Link>
               </div>
        </div>
    )
}

export default Header
