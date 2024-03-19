import React from 'react'
import "./AppHeader.css"
import Logo from '../Logo/Logo'

const AppHeader = () => {
  return (
    <header className='appheader-container'>
      <Logo />
      <ul className='nav'>
        <li className='item' id='home-link'><a href='#'>HOME</a></li>
        <li className='item' id='products-link'><a href='#'>PRODUCTS</a></li>
        <li className='item' id='gallery-link'><a href='#'>GALLERY</a></li>
        <li className='item' id='contact-link'><a href='#'>CONTACT</a></li>
      </ul>
    </header>
  )
}

export default AppHeader