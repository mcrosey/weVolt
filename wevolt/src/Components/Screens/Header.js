import React from 'react'
import '../../Header.css'
import BatteryChargingFullIcon from '@material-ui/icons/BatteryChargingFull';
import BatteryCharging30Icon from '@material-ui/icons/BatteryCharging30';
import ExploreIcon from '@material-ui/icons/Explore';
import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
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
                
               {/* <input  
               placeholder="find a provided charger"/> */}
               <Link to="/search">
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

                    <Link to="/mapbox">
                    <ExploreIcon />
                    </Link>

                   <Link to="/profile">
                   <PersonIcon />
                   </Link>

                   <Link to="/login">
                    <ExitToAppIcon />
                    </Link>

               </div>
        </div>
    )
}

export default Header
