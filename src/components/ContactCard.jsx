import React from 'react'
import '../style/contactCard.css'

import iconA from '../images/iconA.svg'
import iconB from '../images/iconB.svg'
import iconC from '../images/iconC.svg'

function ContactCard() {
  return (
    <section className='contactCard'>
        <div className="container">
            <div className="touch_wrap">
                <h1>Get in Touch</h1>
                <div className="touch_card">
                    <p>I’d love to hear about what you’re working on and how I could help. I’m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I’m also happy to hear about opportunites that don’t fit that description. I’m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
                    <div className="touch_icon">
                        <img src={iconA} alt="" />
                        <img src={iconB} alt="" />
                        <img src={iconC} alt="" />
                    </div>
                </div>
            </div>
            <div className="email_grid">
                <h1>Contact Me</h1>
                <div className="email_card">
                    <form>
                        <p>Name</p>
                        <input type="text" placeholder='Jane Appleseed'/>
                        <p>Email Address</p>
                        <input type="text" placeholder='email@example.com' />
                        <p>Message</p>
                        <textarea style={{resize:'none'}} placeholder='How can I help?'></textarea>
                        <button type="submit">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactCard