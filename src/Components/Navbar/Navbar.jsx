import React from 'react'
import './Navbar.css'
import logo from "../../assets/logo.svg"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='navlogo'>
            <img src={logo} alt="kunalborkar2001@gmail.com" />
            <p>IGSTUDIO</p>
        </div>
        <div className='navmid'>
            <p>Home</p>
            <p>Attorneys</p>
            <p>Practice Areas</p>
            <p>About Us</p>
        </div>
        <div className='navend'>
            <button>Contact Now</button>
        </div>
    </div>
  )
}

export default Navbar