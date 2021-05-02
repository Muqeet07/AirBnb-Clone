import React from 'react'
import './LivePlace.css'

function LivePlace({image, text}) {
  return (
    <div className="liveplace">
        <img className="liveplace__image" src={image}/>
        <div className="liveplace__text">{text}</div>
    </div>
  )
}

export default LivePlace
