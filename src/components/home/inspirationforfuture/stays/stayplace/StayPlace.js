import React from 'react'
import './StayPlace.css'

function StayPlace({toptext, bottomtext}) {
  return (
    <div className="stayplace">
        <div className="stayplace__toptext">
            {toptext}
        </div>
        <div className="stayplace__bottomtext">
            {bottomtext}
        </div>
    </div>
  )
}

export default StayPlace
