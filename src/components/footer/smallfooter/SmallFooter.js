import React from 'react'
import './SmallFooter.css'
import { Language, AttachMoney, Facebook, Twitter, Instagram } from '@material-ui/icons';

function SmallFooter() {
  return (
    <div className="smallfooter">
        <div className="smallfooter__left">
            <span>&copy; 2021 Airbnb, Inc.</span>
            <ul>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Sitemap</li>
            </ul>
        </div>
        <div className="smallfooter__right">
            <div className="smallfooter__right__left">
                <Language />
                <span>English (US)</span>
            </div>
            <div className="smallfooter__right__center">
                <AttachMoney />
                <span>USD</span>
            </div>
            <div className="smallfooter__right__right">
                <Facebook />
                <Twitter />
                <Instagram />
            </div>
        </div>
    </div>
  )
}

export default SmallFooter
