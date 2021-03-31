import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = (props) => {
  return (
    <div className="header-container">
      <div className="header-container__heading">
        <h1>Beans Love Beers</h1>
      </div>
      <div className="header-container__buttons">
        <h3>
          <Link onClick={props.fetchData} className="links" to="/">
            Home
          </Link>
        </h3>
        <h3>
          <Link to="/favourites" className="links">
            Favourites
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
