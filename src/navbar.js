// NavBar.js

import React from 'react';
import { Outlet, Link } from "react-router-dom";

const NavBar = ({ handleMenuClick }) => {
  return (
    <>
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
          
          <li><Link to="/articoli">Articoli</Link></li>
          
          <li className="dropdown">
            <a href="/">Media</a>
            <div className="dropdown-content">
              <Link to="/articoli">Articoli</Link>
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
    <Outlet />
    </>
  );
};

export default NavBar;
