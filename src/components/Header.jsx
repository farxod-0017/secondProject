import React, { useRef } from 'react'
import '../style/header.css'

import logo from '../images/logo.svg'
import { NavLink } from 'react-router-dom'

function Header() {
  let modal = useRef()
  let burger = useRef()
  function callModal(e) {
    e.target.classList.toggle("replace_sign")
    modal.current.classList.toggle("show_modal")
  }
  function callId(e) {
    if(e.target.id === "home" || "port" || "cont") {
      burger.current.classList.toggle("replace_sign")
      modal.current.classList.toggle("show_modal")
    }
  }
  
  return (
    <section className='header'>
      <div className="modal" ref={modal} onClick={(e)=>callId(e)}>
        <NavLink to="/" id='home'>HOME</NavLink>
        <NavLink to="/portfolio" id='port'>PORTFOLIO</NavLink>
        <NavLink to="/contact" id='cont'>CONTACT ME</NavLink>
      </div>
      <div className="container">
        <div className="head_wrap">
          <NavLink to="/"><img src={logo} alt="" /></NavLink>
          <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/portfolio">PORTFOLIO</NavLink>
            <NavLink to="/contact">CONTACT ME</NavLink>
          </nav>
          <div className="burger" onClick={(e)=>callModal(e)} ref={burger}></div>
        </div>
      </div>
    </section>
  )
}

export default Header