import React from 'react'
import './Places.css'
import { Link } from 'react-router-dom';

function Places({image1, image2, heading1, heading2, text1, text2}) {
  return (
    <div className="places">
        <Link to="/search" style={{textDecoration: 'none', color: 'black'}}><div className="places__place">
            <img className="place__image" src={image1}/>
            <div className="place__text">
                <h4>{heading1}</h4>
                <div>{text1}</div>
            </div>
        </div></Link>
       <Link to="/search" style={{textDecoration: 'none', color: 'black'}}><div className="places__place">
            <img className="place__image" src={image2}/>
            <div className="place__text">
                <h4>{heading2}</h4>
                <div>{text2}</div>
            </div>
        </div></Link>
    </div>
  )
}

export default Places
