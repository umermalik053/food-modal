import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navComponent'>
      <div className="Navbar">
        <div className="logo">
        <img src="./assets/img/logo.png" width={60}/>
        <h1>Food</h1>
        </div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
