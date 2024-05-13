import React from 'react'
import '../style/card.css'
import { NavLink } from 'react-router-dom'

function Card({img, name, text, link}) {
  return (
    <section className='card'>
        <div className="container">
            <div className="card_wrap">
                <div className="card_img"><img src={img} alt="" /></div>               
                <div className="card_text">
                    <h2>{name}</h2>
                    <p>{text}</p>
                    <NavLink to={link}><button>VIEW PROJECT</button></NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Card