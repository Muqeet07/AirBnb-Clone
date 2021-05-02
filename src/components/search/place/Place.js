import React from 'react'
import './Place.css'
import { FavoriteBorder, Star } from '@material-ui/icons';

function Place({ image, firsttext, secondtext, thirdtext, fourthtex, star, price}) {
  return (
    <div className="place">
        <div className="place__imagehere">
            <img src={image} alt="placeimage"/>
        </div>
        <div className="place__textcontainer">
            <span>{firsttext}</span>
            <h3>{secondtext}</h3>
            <span>{thirdtext}</span>
            <span>{fourthtex}</span>
            <div className="place__textcontainer__bottom"> 
                <div className="place__textcontainer__bottom__left">
                    <div style={{color: 'crimson'}}><Star /></div>
                    <div>{star}</div>
                </div>
                <div className="place__textcontainer__bottom__right">
                    <strong>${price}</strong>/ night
                </div>
            </div>
            <div className="place__textcontainer__heart">
                <FavoriteBorder />
            </div>
        </div>
    </div>
  )
}

export default Place
