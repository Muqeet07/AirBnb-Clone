import React from 'react'
import './Calender.css';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { Calendar } from 'react-date-range';

function Calender() {

    function handleSelect(date){
        console.log(date); // native Date object
    }

  return (
    <div className="calender">
      <Calendar
        date={new Date()}
        onChange={handleSelect}
      />
    </div>
  )
}

export default Calender
