import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './footer.css';
import Logo from '../../atoms/logoBtn/Logo';

 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
        <Logo className="logo-footer" image="./logososvet.png" />
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <a href="/contact">Contactez-nous</a>
            <ul>
              <li><a href="#about"><FaMapMarkerAlt/>56 rue Sadi Carnot, Paris 75020</a></li>
              <li><a href="#careers"><FaEnvelope /> contact@sosvet.com</a></li>
              <li><a href="#terms"><FaPhoneAlt /> +33 6 56 82 29 46 </a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 SOSVET. Tous droits réservés.</p>
        <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;