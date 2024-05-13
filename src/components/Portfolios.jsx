import React from 'react'
import '../style/portfolios.css'
import { NavLink, useParams } from 'react-router-dom';

import manageHero from '../images/manageHero.jpg'
import manageS1 from '../images/manageStatic1.jpg'
import manageS2 from '../images/manageStatic2.jpg'

import bookmarkHero from '../images/bookmarkHero.png'
import bookmarkS1 from '../images/bookmarkStatic1.jpg'
import bookmarkS2 from '../images/bookmarkStatic2.jpg'

import insureHero from '../images/insureHero.png'
import insureS1 from '../images/insureStatic1.jpg'
import insureS2 from '../images/insureStatic2.jpg'

import fyloHero from '../images/fyloHero.jpg'
import fyloS1 from '../images/fyloStatic1.jpg'
import fyloS2 from '../images/fyloStatic2.jpg'

import prev from '../images/prev.svg'
import next from '../images/next.svg'
import Contact from './Contact';

let DATA = [
 {
  id:1,
  heroImg: manageHero,
  title:"Manage",
  text:"This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider.",
  tecnology:"HTML / CSS / JS",
  staticA: manageS1,
  staticB:manageS2
 },
 {
  id:2,
  heroImg: bookmarkHero,
  title:"Bookmark",
  text:"This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section.",
  tecnology:"HTML / CSS / JS",
  staticA: bookmarkS1,
  staticB:bookmarkS2
 },
 {
  id:3,
  heroImg: insureHero,
  title:"Insure",
  text:"This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation.",
  tecnology:"HTML / CSS / JS",
  staticA: insureS1,
  staticB:insureS2
 },
 {
  id:4,
  heroImg: fyloHero,
  title:"Fylo",
  text:"This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes.",
  tecnology:"HTML / CSS",
  staticA: fyloS1,
  staticB:fyloS2
 },
]
function Portfolios() {
    const locate = useParams()
    const prcNumber = locate.prNumber

    let found_data = DATA.find(item => Number(prcNumber) === Number(item.id))
    console.log(found_data);
  return (
    <section className='portfolios'>
      <div className="container">
        <div className="port_hero">
          <img src={found_data.heroImg} alt="" />
        </div>
        <div className="port_wrap">
          <div className="port_text">
            <div className="port_content">
              <h2>{found_data.title}</h2>
              <p>{found_data.text}</p>
              <span>Interaction Design / Front End Development</span>
              <span>{found_data.tecnology}</span>
              <button>VISIT WEBSITE</button>
            </div>
            <p className='port_cont_countre'>{found_data.text}</p>
          </div>
          <div className="port_static">
            <h4>Project Background</h4>
            <p>This project was a front-end  challenge from Frontend Mentor. It’s a platform that enables you to practice building websites to a design and project brief. Each challenge includes mobile and desktop designs to show how the website should look at different screen sizes. Creating these projects has helped me refine my workflow and solve real-world coding problems. I’ve learned something new with each project, helping me to improve and adapt my style.</p>
            <h3>Static Previews</h3>
            <img src={found_data.staticA} alt="" />
            <img src={found_data.staticB} alt="" />
          </div>
        </div>
        <div className="slider_wrap">
          <NavLink to={`/portfolio/${Number(prcNumber) === 1 ? DATA.length : Number(prcNumber-1)}`}>
          <div className="slider_prev">
            <img src={prev} alt="" />
            <div className="prev_text">
              <h3>{Number(prcNumber) === 1 ? DATA[Number(DATA.length-1)].title : DATA[Number(prcNumber-2)].title}</h3>
              <p>Previous Project</p>
            </div>
          </div>
          </NavLink>
          <div className="slider_line"></div>
          <NavLink to={`/portfolio/${Number(prcNumber) === DATA.length ? 1 : Number(prcNumber-1+2)}`}>
          <div className="slider_next">
            <div className="prev_text" id='next_text'>
              <h3>{Number(prcNumber) === Number(DATA.length) ? DATA[0].title : DATA[Number(prcNumber)].title}</h3>
              <p>Next Project</p>
            </div>
            <img src={next} alt="" />
          </div>
          </NavLink>
        </div>
        <Contact/>
      </div>
    </section>
  )
}

export default Portfolios