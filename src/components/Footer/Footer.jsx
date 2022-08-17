import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#home" className='footer__logo'>Sebastian Pastorenzi</a>
      <ul className="permalink">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/sepaa"><FaFacebook /></a>
        <a href="https://instagram.com/sebapas"><FiInstagram /></a>
        {/* <a href="https://twitter.com"> <IoLogoTwitter /></a> */}
      </div>

      <div className="footer__copyright">
        <small>&copy; Sebastian Pastorenzi, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer