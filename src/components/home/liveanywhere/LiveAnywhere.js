import React, { useState } from 'react'
import './LiveAnywhere.css'
import LivePlace from './liveplace/LivePlace'
import liveAnywhereData from '../../data/liveanywhere.json'

function LiveAnywhere() {

    const [livedata, setLiveData] = useState(liveAnywhereData);

  return (
    <div className="liveanywhere">
        <h1 className="liveanywhere__title">Live Anywhere</h1>
        <div className="liveanywhere__liveplacescontainer">
            {
                livedata.map(live => {
                    return(
                        <LivePlace 
                            key={live.text}
                            image={live.image}
                            text={live.text}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default LiveAnywhere
