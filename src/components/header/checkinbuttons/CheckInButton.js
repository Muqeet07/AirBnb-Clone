import React from 'react'
import './CheckInButton.css'

function CheckInButton({toptext, bottomtext}) {
  return (
            <div>
                <div style={{fontSize: '15px', color: 'black'}}>
                    {toptext}
                </div>
               <div style={{fontSize: '15px' ,color: 'gray'}}>{bottomtext}</div>
            </div>
  )
}

export default CheckInButton
