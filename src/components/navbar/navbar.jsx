import React from 'react'
import './navbar.css'
import logoT from '../../assets/LogoTrans.png'


const navbar = () => {
  return (
    <nav className='container'>
        <div className="header">
            <img src={logoT} alt="" className="logo"/>
            <p className="name">Jarod Primeau</p>
        </div>
        <ul className="navLinks">
            <li>About Me</li>
            <li>Experience</li>
            <li>My Projects</li>
            <li>My Socials</li>
            <li>Contact Me</li>
        </ul>
    </nav>
  )
}

export default navbar