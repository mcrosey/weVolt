import React from 'react'
import '../../Header.css'
import { Avatar } from "@material-ui/core";
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import BatteryCharging30Icon from '@material-ui/icons/BatteryCharging30';
import ExploreIcon from '@material-ui/icons/Explore';
import PersonIcon from '@material-ui/icons/Person';
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
                
               <input  
               placeholder="find a provided charger"/>
               <Link to="/genericinfo">
               <BatteryChargingFullIcon />
               </Link>
              
               </div> 

               <div className= "header-right">
                   <Link to="/createlisting">
                   <p>Share your volts
                   <BatteryCharging30Icon />
                   </p>
                   </Link>

                   <Link to="/maps">
                    <ExploreIcon />
                    </Link>

                   <Link to="login">
                   <PersonIcon />
                   </Link>
               </div>
        </div>
    )
}

export default Header
