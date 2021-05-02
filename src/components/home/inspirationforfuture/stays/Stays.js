import React, { useState } from 'react'
import './Stays.css'
import StayPlace from './stayplace/StayPlace'
import inspirationForFutureData from '../../../data/inspirationforfuture.json';

function Stays({buttonActive1, buttonActive2, buttonActive3, buttonActive4, buttonActive5}) {

    const [inspirationData, setInspirationData] = useState(inspirationForFutureData);

    let data;

    console.log(inspirationData)

    if(buttonActive1){
        data = inspirationData.destinationsforartsandculture;
    }else if(buttonActive2){
        data = inspirationData.destinationsforoutdooradventure;
    }else if(buttonActive3){
        data = inspirationData.mountaincabins;
    }else if(buttonActive4){
        data = inspirationData.beachdestinations;
    }else if(buttonActive5){
        data = inspirationData.populardestinations;
    }

  return (
    <div className="stays">
        {
            data.map(values => {
                return(
                    <StayPlace
                        key={values.toptext} 
                        toptext={values.toptext}
                        bottomtext={values.bottomtext}
                    />
                )
            })
        }
    </div>
  )
}

export default Stays
