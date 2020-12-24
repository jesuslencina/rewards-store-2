import { useState } from 'react';

import logo from '../../assets/aerolab-logo.svg';
import coin from '../../assets/icons/coin.svg';

import './navStyles.css';

function Nav() {
  const [burger, setBurger] = useState('');

  const handleBurger = () => {
    burger === '' ? setBurger('is-active') : setBurger('');
  };

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://aerolab.co/">
          <img src={logo} width="32" height="36" />
        </a>

        <a
          role="button"
          className={`navbar-burger ${burger}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={handleBurger}
          data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className="navbar-end">
        <div className={`navbar-menu ${burger}`}>
          <div className="navbar-start">
            {' '}
            <div className="user-data navbar-item">
              <p>Hardcoded</p>
              <div>
                <b>500</b> <img src={coin} alt="Coins" />
              </div>
            </div>
          </div>
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-secondary">View history</a>
              <a className="button is-primary">
                <strong>REDEEM POINTS</strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
