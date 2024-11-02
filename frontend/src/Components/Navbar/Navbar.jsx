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
        <li>INICI <hr/></li>
        <li>MENÚ</li>
        <li>GALERIA</li>
        <li>NOSALTRES</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img className="fotocarro" src={cart_icon} alt=''/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
