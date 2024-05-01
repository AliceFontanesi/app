// NavBar.js

import React from 'react';

const NavBar = ({ handleMenuClick }) => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li className="dropdown">
          <a href="/">Esplora</a>
          <div className="dropdown-content">
            {/* Contenuto del menu Esplora */}
          </div>
        </li>
        <li className="dropdown">
          <a href="/">Media</a>
          <div className="dropdown-content">
            <a href="/" onClick={() => handleMenuClick('Articoli')}>Articoli</a>
            <a href="/">Foto</a>
            <a href="/">Video</a>
          </div>
        </li>
        <li className="dropdown">
          <a href="/">Info</a>
          <div className="dropdown-content">
            {/* Contenuto del menu Info */}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
