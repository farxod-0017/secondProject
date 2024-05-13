import React from 'react'
import '../style/hero.css'
import hero from '../images/heroP.png'
import heroBtn from '../images/heroBtn.svg'
import heroJ from '../images/heroJ.jpg'

function Hero() {
  return (
    <section className='hero'>
        <div className="container">
            <div className="hero_wrap" style={{backgroundImage:`url(${hero})`}}>
                <img className='hero_img' src={heroJ} alt="" />
                <div className="hero_card">
                    <h1>Hey, I’m Alex Spencer and I love building beautiful websites</h1>
                    <div className="hero_button">
                        <img src={heroBtn} alt="" />
                        <button>ABOUT ME</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero