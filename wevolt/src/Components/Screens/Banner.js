import React from 'react'
import '../../Banner.css'
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();

    return (
        <div className='banner'>
            <div className='banner-info'>
                <h1>Connect Together</h1>
                <h5>Join the charging community
                </h5>

                <Button onClick={()=>
                    history.push('/search')}
                    variant='outlined'
                    >
                    Find a voltShare
                </Button>
            
            </div>
        </div>
    )
}

export default Banner
