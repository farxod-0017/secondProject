import React from 'react'
import Card from './Card'

import manage from '../images/manage.jpg'
import bookmark from '../images/bookmark.png'
import insure from '../images/Insure.png'
import fylo from '../images/fylo.png'
import Contact from './Contact'

function PortfolioHome() {
  return (
    <div>
      <Card img={manage} name="Manage" text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the testimonial slider." link="/portfolio/1" />
      <div className="re_card">
        <Card img={bookmark} name="Bookmark" text="This project required me to build a fully responsive landing page to the designs provided. I used HTML5, along with CSS Grid and JavaScript for the areas that required interactivity, such as the features section." link="/portfolio/2"/>
      </div>
      <Card img={insure} name="Insure" text="This was a small project which mostly consisted of HTML and CSS. I built a fully-responsive landing page. The only JavaScript this project required was to enable the toggling of the mobile navigation." link="/portfolio/3"/>
      <div className="re_card" id='ire_card'>
        <Card img={fylo} name="Fylo" text="This project was built in pure HTML and CSS. I had mobile and desktop designs to work to and built it so that it was fully-responsive. I took a mobile-first approach and used modern CSS like Flexbox and Grid for layout purposes." link="/portfolio/4"/>
      </div>
      <Contact/>
    </div>
  )
}

export default PortfolioHome