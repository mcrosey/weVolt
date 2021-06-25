import { Link, useHistory } from 'react-router-dom'
import { UserContext } from '../../App';
import React, {useContext} from 'react'
import PersonIcon from '@material-ui/icons/Person';
import BatteryAlertIcon from '@material-ui/icons/BatteryAlert';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PowerIcon from '@material-ui/icons/Power';
import '../../Header.css'


function Header() {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    return (
        <div className= 'header'>
            <Link to="/">
                <img
                className="header-icon"
                src="https://i.ibb.co/pft9yYR/IMG-4403.jpg"          
                alt="logo"
        />    
            </Link>  
               <div className= "header-right">
                   <Link to="/createlisting">
                    <PowerIcon />
                    <p>Share volts</p>
                   </Link>

                   <Link to="/maps">
                    <BatteryAlertIcon />
                    <p>Need a level 3?</p>
                    </Link>

                   <Link to="/profile">
                   <PersonIcon />
                   <p>View profile</p>
                   </Link>

                   <Link to="/login">
                    <ExitToAppIcon />
                    <p>Log-in</p>
                    </Link>

                    <NotInterestedIcon 
                        onClick={()=>{
                            localStorage.clear()
                            dispatch({type:"CLEAR"})
                            history.push('/login')
                        }}
                    />
               </div>
        </div>
    )
}

export default Header
