import React from 'react'
import './BecomeAHost.css'

function BecomeAHost() {
  return (
      <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}>
    <div className="becomeahost">
        <img className="becomeahost__image" src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1200"/>
        <div className="becomeahost__textcontainer">
            <div className="becomeahost__textconatiner__heading">Become a Host</div>
            <div className="becomeahost__textconatiner__text">Earn extra income and unlock new opportunities by sharing your space.</div>
            <button className="becomeahost__textconatiner__button">Learn More</button>
        </div>
    </div>
      </div>
   
  )
}

export default BecomeAHost
