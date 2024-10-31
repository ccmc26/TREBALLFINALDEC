import React from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/carrito.png'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img className="fotologo" src={logo} alt="" />
        <p className='baixfoto'>LA TRAVESSA</p>
      </div>
      <ul className="nav-menu">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}
