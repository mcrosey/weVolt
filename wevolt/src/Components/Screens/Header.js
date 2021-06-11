import React from 'react'
import '../../Header.css'
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar, Avatat } from "@material-ui/core";

function Header() {
    return (
        <div className= 'header'>
            <img
            className="header-icon"
            src="https://i.ibb.co/pft9yYR/IMG-4403.jpg"          
            alt="logo"
        />    
            
           <div className='header-center'>
               <input type="text" />
               <SearchIcon />
               </div> 

               <div className= "header-right">
                   <p>Share your volts</p>
                   <LanguageIcon />
                   <ExpandMoreIcon />
                   <Avatar />
               </div>
        </div>
    )
}

export default Header
