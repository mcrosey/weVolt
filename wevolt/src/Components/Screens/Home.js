import React from 'react'
import '../../Home.css' 
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className= 'home'>
            <Banner />
            <div></div>
            <div className='home-section'>
                <Card />
                <div />
                <Card />
                <div />
                <Card />
            </div>
            
        </div>
    )
}

export default Home
