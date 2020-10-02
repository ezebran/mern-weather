import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Navigation() {
  return (
    <div className="header">
      <Link className="logo-header" to="/">CLIME<span>APP</span></Link>
      <ul>
          <li>
              <Link className="navs" to="/">Inicio</Link>
          </li>
          <li>
                <Link className="navs" to="/panel">Panel</Link>
          </li>
      </ul>
    </div>
  );
}

export default Navigation;
