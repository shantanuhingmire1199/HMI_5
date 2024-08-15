// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-icons">
        <span className="network-icon">📶</span>
        <span className="connectivity-icon">🔗</span>
      </div>
    </nav>
  );
};

export default Navbar;
