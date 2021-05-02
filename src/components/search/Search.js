import React, { useState, useEffect } from 'react'
import './Search.css'
import Place from './place/Place'
import searchPlaceData from '../../components/data/searchplace.json';
import { useLocation } from 'react-router-dom';

function Search() {

    const [searchPlace, setSearchPlace] = useState(searchPlaceData);
    const { pathname } = useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);
    },[pathname]);

  return (
    <div className="search">
        <div className="search__textcontainer">
            <span>242 stays</span>
            <h1>Stays in Murree</h1>
            <div className="search__textcontainer__buttonscontainer">
                <button>Cancellation flexibility</button>
                <button>Type of place</button>
                <button>Price</button>
                <button>Instant Book</button>
                <button>More filters</button>
            </div>
        </div>
        <div className="search__placescontainer">
            {
                searchPlace.map(place => {
                    return(
                        <Place 
                            key={place.image}
                            image={place.image}
                            firsttext={place.firsttext}
                            secondtext={place.secondtext}
                            thirdtext={place.thirdtext}
                            fourthtext={place.fourthtext}
                            star={place.star}
                            price={place.price}
                        />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Search
