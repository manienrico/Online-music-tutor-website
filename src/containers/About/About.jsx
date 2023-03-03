import React from 'react'
import './about.css'
import keyboard from '../../constants/images/keyboard.png'

// 43:55

function About() {
  return (
    <div className='app__about' id='about' style={{backgroundImage:`url(${keyboard})`,backgroundRepeat:"no-repeat",backgroundSize:"contain",
     }} >
      {/* <div className="app__about-img">
        <img src={keyboard} alt="Piano" />
      </div> */}
      <div className="app__about-texts">
        <h1 className="app__about-texts__heading">
        Explore the Library
        </h1>
        <p className="app__about-texts__body">
        At jointure ladyship an insisted so humanity he. Friendly
         bachelor entrance to on by. As put impossible own apartments b 
         We so opinion friends me message as delight.
          Whole front do of plate heard oh ought.
        </p>
        <button className='app__about-btn'>
          <a href="/" className='text-gradient'>Try it Today.</a>
        </button>
      </div>
      
    </div>
  )
}

export default About