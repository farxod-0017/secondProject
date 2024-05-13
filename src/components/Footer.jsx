import React from 'react'
import '../style/footer.css'
import { NavLink } from 'react-router-dom'

import logoW from '../images/logoW.svg'
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className="container">
        <div className="footer_wrap">
          <div className="footer_nav">
            <img src={logoW} alt="" />
            <NavLink to="/">HOME</NavLink>
            <NavLink to="portfolio">PORTFOLIO</NavLink>
            <NavLink to="/contact">CONTACT ME</NavLink>
          </div>
          <div className="footer_icon">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt=''/>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer