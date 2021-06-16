import '../../SearchResult.css'
import React from 'react'
// import React, {useState, useEffect, useContext} from 'react'
// import {UserContext} from '../../App'
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';

//this is the function to pull in search page info





function SearchResult({
    img,
    address,
    description,
    review,
    star,
    price,
}) {
    
    return (

            
        <div className='searchResult'>
           
           

           <div className='searchResult-info'>
               <div className='searchResult-infoTop'>
                   <p>{address}</p>
                   <h3>{description}</h3>
                   <p>___</p>
                   <p>{review}</p>
               </div>
               <div className='searchResult-infoBottom' >
                   <div className="searchResult-stars">
                       <StarIcon
                       className="searchResult-star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                   </div>
                    <div className='searchResult-price'>
                        <h2>{price}</h2>
                    </div>
                </div>        
           </div>
           <img src={img} alt="" />
        </div>
    )
}

export default SearchResult
