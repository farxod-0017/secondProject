import React from 'react'
import '../style/about.css'

import about from '../images/about.png'
import { NavLink } from 'react-router-dom'

function About() {
  return (
    <section className='about'>
        <div className="container">
            <div className="about_wrap">
                <div className="about_img">
                    <img src={about} alt="" />
                </div>
                <div className="about_card">
                    <h2>About Me</h2>
                    <p>I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work.</p>
                    <NavLink to="/portfolio"><button>GO TO PORTFOLIO</button></NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About