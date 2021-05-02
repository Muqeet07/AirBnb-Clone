import React, { useState } from 'react'
import './Discover.css'
import Experience from './experience/Experience'
import discoverExperiencesData from '../../data/discoverexperiences.json';

function Discover() {

    const [discoverData, SetDiscoverData] = useState(discoverExperiencesData);

  return (
    <div className="discover">
        <div style={{marginBottom: '20px'}}>
            <h1 className="discover__titleheading">Discover Experiences</h1>
            <div className="discover__titletext">Unique activities with local experts—in person or online.</div>
        </div>
        <div className="discover__experiencescontainer">
            {
                discoverData.map(discover => {
                    return(
                        <Experience 
                            key={discover.heading}
                            image={discover.image}
                            heading={discover.heading}
                            text={discover.text}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Discover
