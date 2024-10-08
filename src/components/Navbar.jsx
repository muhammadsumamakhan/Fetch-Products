// components/Navbar.js
import React from 'react';
import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">MSK</div>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Categories</li>
        <li>My Account</li>
        <li>Help</li>
      </ul>
    </nav>
  );
};

export default Navbar;

