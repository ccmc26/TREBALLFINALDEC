import React from 'react'
import './CSS/LoginSignUp.css';
import { Link } from 'react-router-dom';

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Inicia sessió</h1>
        <p className="loginsignup-login">Ja tens un compte? <span><Link className='link-text' to='/'>Registra't</Link></span></p>
        <div className="loginsignup-fields">
          {/* <input type="text" placeholder='Nom'/> */}
          <input type="email" placeholder='Adreça electrònica'/>
          <input type="password" placeholder='Contrasenya'/>
        </div>
        <button>LogIn</button>
        {/* s'ha de linkejar el inici de sessió en altra pesatanya */}
      </div>
    </div>
  )
}

export default LoginSignUp;