import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/carrito.png';

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
        <li onClick={() => {setMenu("inici")}}><Link style={{ textDecoration: 'none' }} to='/'>INICI</Link>{menu==="inici" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("menu")}}><Link style={{ textDecoration: 'none' }} to='/menu'>MENÚ</Link>{menu==="menu" ? <hr/> : <></>}</li>
        <li onClick={() => {setMenu("galeria")}}><Link style={{ textDecoration: 'none' }} to='/'>GALERIA</Link>{menu==="galeria" ? <hr/> : <></>}</li>
        {/* canviar el nosaltres, sobra, vore que possar */}
        <li onClick={() => {setMenu("nosaltres")}}><Link style={{ textDecoration: 'none' }} to='/'>NOSALTRES</Link>{menu==="nosaltres" ? <hr/> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img className="fotocarro" src={cart_icon} alt=''/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}
