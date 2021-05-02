import React from 'react'
import './Footer.css'
import BigFooter from './bigfooter/BigFooter'
import SmallFooter from './smallfooter/SmallFooter'

function Footer() {
  return (
    <div className="footer">
        <BigFooter />
        <SmallFooter />
    </div>
  )
}

export default Footer
