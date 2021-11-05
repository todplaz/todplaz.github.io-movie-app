import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="inner-content">
          <div className="brand">
            <Link to="/"> Stronger. </Link>
          </div>
          <ul className="nav-links">
            <li>
              <Link to="/"> Playlist </Link>
            </li>
            <li>
              <Link to="/watched"> Déjà vu </Link>
            </li>
            <li>
              <Link to="/add" className="btn"> Ajouter </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;