// components/Footer.js
import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 MSK. All rights reserved.</p>
      <ul className="footer-links">
        <li>Terms of Service</li>
        <li>Privacy Policy</li>
        <li>Contact Us</li>
      </ul>
    </footer>
  );
};

export default Footer;

