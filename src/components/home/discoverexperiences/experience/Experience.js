import React from 'react'
import './Experience.css'

function Experience({image, heading, text}) {
  return (
    <div className="experience">
        <img className="experience__image" src={image}/>
        <h3 className="experience__heading">{heading}</h3>
        <div className="experience__text">{text}</div>
    </div>
  )
}

export default Experience
