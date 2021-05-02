import React, { useState } from 'react'
import './Inspiration.css'
import Stays from './stays/Stays';

function Inspiration() {

    const [buttonActive1, setButtonActive1] = useState(true);
    const [buttonActive2, setButtonActive2] = useState(false);
    const [buttonActive3, setButtonActive3] = useState(false);
    const [buttonActive4, setButtonActive4] = useState(false);
    const [buttonActive5, setButtonActive5] = useState(false);

    const setButton1 = () => {
        setButtonActive1(true);
        setButtonActive2(false);
        setButtonActive3(false);
        setButtonActive4(false);
        setButtonActive5(false);
    }

    const setButton2 = () => {
        setButtonActive1(false);
        setButtonActive2(true);
        setButtonActive3(false);
        setButtonActive4(false);
        setButtonActive5(false);
    }

    const setButton3 = () => {
        setButtonActive1(false);
        setButtonActive2(false);
        setButtonActive3(true);
        setButtonActive4(false);
        setButtonActive5(false);
    }

    const setButton4 = () => {
        setButtonActive1(false);
        setButtonActive2(false);
        setButtonActive3(false);
        setButtonActive4(true);
        setButtonActive5(false);
    }

    const setButton5 = () => {
        setButtonActive1(false);
        setButtonActive2(false);
        setButtonActive3(false);
        setButtonActive4(false);
        setButtonActive5(true);
    }


  return (
    <div className="inspiration">
        <h1 className="inspiration__heading">Inspiration for future getaways</h1>
        <div className="inspiration__buttonscontainer">
            <button className={`button ${buttonActive1 ? 'active' : ''}`} onClick={()=>{setButton1();}}>
                Destinations for arts and culture
            </button>
            <button className={`button ${buttonActive2 ? 'active' : ''}`} onClick={()=>{setButton2();}}>
                Destinations for outdoor adventure
            </button>
            <button className={`button ${buttonActive3 ? 'active' : ''}`} onClick={()=>{setButton3();}}>
                Mountain cabins
            </button>
            <button className={`button ${buttonActive4 ? 'active' : ''}`} onClick={()=>{setButton4();}}>
                Beach destinations
            </button>
            <button className={`button ${buttonActive5 ? 'active' : ''}`} onClick={()=>{setButton5();}}>
                Popular destinations
            </button>
        </div>
        <Stays 
            buttonActive1={buttonActive1}
            buttonActive2={buttonActive2}
            buttonActive3={buttonActive3}
            buttonActive4={buttonActive4}
            buttonActive5={buttonActive5}
        />
    </div>
  )
}

export default Inspiration
