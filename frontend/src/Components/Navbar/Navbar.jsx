import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/carrito.png'

export const Navbar = () => {
  const [menu,setMenu] = useState("inici");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img className="fotologo" src={logo} alt="" />
        <p className='baixfoto'>LA TRAVESSA</p>
      </div>
      <ul className="nav-menu">
        {/* cada element del menu te un event que seteja el hookal valor indicat */}
        {/* si dona la casualitat que te el valor del hookmenu concideix en el elemnt */}
        {/* li afegim un element <hr/> que el que fa es crear una linia per a destacar */}
        <li onClick={() => {setMenu("inici")}}>INICI {menu==="inici" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("menu")}}>MENÚ {menu==="menu" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("galeria")}}>GALERIA {menu==="galeria" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("nosaltres")}}>NOSALTRES{menu==="nosaltres" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img className="fotocarro" src={cart_icon} alt=''/>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
