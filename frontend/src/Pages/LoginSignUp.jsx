import React from 'react'
import './CSS/LoginSignUp.css';

const LoginSignUp = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Registra't</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Nom'/>
          <input type="email" placeholder='Adreça electrònica'/>
          <input type="password" placeholder='Contrasenya'/>
        </div>
        <button>Continua</button>
        <p className="loginsignup-login">Ja tens un compte? <span>Inicia sessió</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>Accepte els termes d'us i privacitat</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp;