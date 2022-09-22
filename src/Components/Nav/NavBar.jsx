import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='nav__style'>
      <ul className='ul__style'>
        <li className='li__style color__one'>
        <div>
            <a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            About me
            </a>
        </div>
        </li>
        <li className='li__style color__one'>
        <div>
            <a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Skills
            </a>
        </div>
        </li>
        <li className='li__style color__one'>
        <div>
            <a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Contact
            </a>
        </div>
        </li>
        <li className='li__style color__one'>
        <div>
            <a href="">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Arcade
            </a>
        </div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar