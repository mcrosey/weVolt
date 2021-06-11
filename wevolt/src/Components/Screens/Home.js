import React from 'react'
import '../../Home.css' 
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className= 'home'>
            <Banner />
            <div className='home-section'>
                <Card 
                source="https://images.unsplash.com/photo-1458007683879-47560d7e33c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1327&q=80"
                title="Level 2 charger"
                description="123 Seseme Street"
                price="No Charge"
                />
                <Card 
                source="https://images.unsplash.com/photo-1615903714163-1c9768bfcd06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2689&q=80"
                title="Level 2 Charger"
                description="42 Wallaby Way"
                price="$5.00"
                />
                <Card 
                source="https://images.unsplash.com/photo-1615901555268-839b7a1ede54?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2689&q=80"
                title="LEVEL 2 CHARGER"
                description="897 Main Street"
                price="No Charge"
                />
            </div>
        </div>
    )
}

export default Home
