import React from 'react'
import '../style/contact.css'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <section className='contact'>
        <div className="container">
            <div className="contact_wrap">
                <div className="contact_title">
                    <h1>Interested in doing a project together?</h1>
                </div>
                <div className="c_line"></div>
                <NavLink to="/contact"><button>CONTACT ME</button></NavLink>
            </div>
        </div>
    </section>
  )
}

export default Contact