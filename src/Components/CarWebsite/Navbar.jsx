import React from 'react'
import "./css/navbar.css"
const Navbar = () => {
  return (
    <div className='navBar'>
        <div className="navlogo">EV-olution</div>
        <ul className="navmenu">
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
            <li className='navcontact'>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar