import React from 'react'
import './CSS/LoginSignUp.css';

import { Link } from 'react-router-dom';
// import { GoPersonFill, GoPasskeyFill } from "react-icons/go";

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Inicia sessió</h1>
        <p className="loginsignup-login">Ja tens un compte? <span><Link className='link-text' to='/register'>Registra't</Link></span></p>
        <div className="loginsignup-fields">
          {/* <GoPersonFill /> */}
          <input type="email" placeholder='Adreça electrònica'/>
          {/* <GoPasskeyFill /> */}
          <input type="password" placeholder='Contrasenya'/>
        </div>
        <p style={{ marginTop: "20px" }} className="loginsignup-login">No me'n recorde de la <span><Link className='link-text' to='/password'>contrasenya</Link></span></p>
        <button>LogIn</button>
        {/* s'ha de linkejar el inici de sessió en altra pesatanya */}
      </div>
    </div>
  )
}

export default LoginSignUp;