import React from 'react'
import '../../Banner.css'
import { Button } from "@material-ui/core"

function Banner() {
    return (
        <div className='banner'>
            <div className='banner-info'>
                <h1>Connect Together</h1>
                <h5>Join the charging community
                </h5>
                <Button
                variant='outlined'>
                    Find a voltShare</Button>
            </div>
            
        </div>
    )
}

export default Banner
