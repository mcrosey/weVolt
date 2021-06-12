import React from 'react'
import '../../SearchResult.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
}) {
    return (
        <div className='searchResult'>
           <img src={img} alt="" />
           <FavoriteIcon
           className="searchResult-heart" />

           <div className='searchResult-info'>
               <div className='searchResult-infoTop'>
                   <p>{location}</p>
                   <h3>{title}</h3>
                   <p>___</p>
                   <p>{description}</p>
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
        </div>
    )
}

export default SearchResult
