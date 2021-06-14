import { Button, ButtonGroup } from '@material-ui/core'
import React from 'react'
import '../../SearchPage.css'
// import { Button } from "@material-ui/core"
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='searchpage'>
            <div className='searchPage-info'>
                <h1>Nearby chargers</h1>
                <Button
                variant="outlined">Search</Button>
                <Button
                variant="outlined">Price</Button>
                <Button
                variant="outlined">Review</Button>
        
            <iframe src="https://map.openchargemap.io/?mode=embedded" 
            allow="geolocation" 
            frameborder="0" 
            width="100%" 
            height="500px">
                
            </iframe>
            
            </div>
            <SearchResult 
                img="https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80"
                location="345 First Street"
                title="Level 2 Charger"
                description="Brand of chrager"
                star="4"
                price="Free"
            />
            <SearchResult 
                img="https://images.unsplash.com/photo-1607197109166-3ab4ee4b468f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80"
                location="876 Hello Street"
                title="Level 2 Charger"
                description="Brand of charger"
                star="5"
                price="Free"
            />
        </div>
    )
}

export default SearchPage
