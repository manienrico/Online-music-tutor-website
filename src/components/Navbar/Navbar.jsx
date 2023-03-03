import React,{useState} from 'react'
import {GiHamburgerMenu } from 'react-icons/gi'
import {BsFacebook,BsTwitter,BsInstagram,BsTelephone,} from 'react-icons/bs'
import {MdOutlineRestaurantMenu,MdEmail,MdFax} from 'react-icons/md'
// import logo from '../../constants/images'

import './navbar.css'

function Navbar() {
  const [toggleMenu,setToggleMenu]= useState({isShow: false});

  return (
    <nav className='app__navbar'>
      <div className="app__navbar-logo">
        <img src='' alt="Logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href="#about">About</a></li>
        <li className='p__opensans'><a href="#services">Services</a></li>
        <li className='p__opensans'><a href="#reviews">Reviews</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In</a>
        <div />
        <a href="/" className='p__opensans'>Sign Up / Free trial</a>
      </div>
      <div className="app__navbar-smallscreen small_screen_things">
        <GiHamburgerMenu 
          className=''
          color='#fff' 
          fontSize={27} 
          onClick={()=>setToggleMenu({isShow: true})} 
          cursor='pointer'/>

        {toggleMenu && (
        <div className={
          toggleMenu.isShow
            ? "app__navbar-smallscreen_overlay flex__center slide-bottom show"
            : "app__navbar-smallscreen_overlay flex__center slide-bottom"
        }>
          <MdOutlineRestaurantMenu fontSize={27} className='overlay__close' onClick={()=>setToggleMenu({isShow: false})} color='#fff' />
          <ul className='app__navbar-smallscreen-links'>
            <li className='p__opensans'><a href="#about">About</a></li>
            <li className='p__opensans'><a href="#services">Services</a></li>
            <li className='p__opensans'><a href="#reviews">Reviews</a></li>
          </ul>
          <div className="app__navbar-smallscreen-login">
            <button id='LoginBtn'>
              <a href="#login" className="p__opensans" >Log In</a>
            </button>
            <br/>
            <button id='SignupBtn'>
              <a href="/" className='p__opensans' >Sign Up / Free trial</a>
            </button>
          </div>
        </div> )}

      </div> 
    </nav>
  )
}

export default Navbar