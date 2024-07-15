import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" id="tm-nav">
      <Link className="navbar-brand" to='/'>Adopt & Love</Link>
    
      <div className="collapse navbar-collapse" id="navbar-supported-content">
        <ul className="navbar-nav mb-2 mb-lg-0">
          <li className="nav-item selected">
            <Link className="nav-link" aria-current="page" to="/main">Home</Link>
            <div className="circle"></div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/galeria">Galeria</Link>
            <div className="circle"></div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">Acerca de</Link>
            <div className="circle"></div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/registrar">Registrar</Link>
            <div className="circle"></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
