import React from 'react';
import './Footer.css'; 

import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Sobre nosaltres</h4>
          <p>Som un ecommerce de menjar per emportar que ofereix una 
            àmplia selecció de plats preparats amb ingredients frescos 
            i locals, pensats per gaudir des de la comoditat de casa 
            teva</p>
        </div>
        <div className="footer-section">
          <h4>Contacta'ns</h4>
          <p>Email: info@fals.com</p>
          <p>Phone: +34 234 567 890</p>
          <ul>
              <li>
                <IoLogoInstagram />
                <IoLogoFacebook />
                <IoLogoTwitter />
              </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};


