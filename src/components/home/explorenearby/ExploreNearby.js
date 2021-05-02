import React, { useState } from 'react'
import './ExploreNearby.css'
import Places from './places/Places'
import placesData from '../../data/explorenearby.json';

function ExploreNearby() {

    const [places, setPlaces] = useState(placesData);

  return (
    <div className="explorenearby">
        <h1 className="explorenearby__title">Explore Nearby</h1>
        <div className="explorenearby__placescontainer">
           {
               places.map(place => {
                   return <Places 
                   key={place.heading1}
                   image1={place.image1}
                   image2={place.image2}
                   heading1={place.heading1}
                   heading2={place.heading2}
                   text1={place.text1}
                   text2={place.text2}
              />
               })
           }
        </div>
    </div>
  )
}

export default ExploreNearby
