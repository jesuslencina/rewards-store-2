import { useState, useContext } from 'react';
import { Context } from '../Context';
import disableScroll from 'disable-scroll';

import PointsModal from './PointsModal';

import logo from '../../assets/aerolab-logo.svg';
import coin from '../../assets/icons/coin.svg';

import './navStyles.css';

function Nav() {
  const [burger, setBurger] = useState('');
  const [modal, setModal] = useState('');

  const { userData, fetchMorePoints, settings, setSettings } = useContext(
    Context
  );

  const handleBurger = () => {
    burger === '' ? setBurger('is-active') : setBurger('');
  };

  const handleModal = () => {
    if (modal === '') {
      setModal('is-active');
      disableScroll.on();
    } else {
      setModal('');
      disableScroll.off();
    }
  };

  return (
    <>
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
              <div className="user-data navbar-item">
                <p>{userData.user.name}</p>
                <div>
                  <b>{userData.user.points}</b> <img src={coin} alt="Coins" />
                </div>
              </div>
            </div>
            <div className="navbar-item">
              <div className="buttons">
                <a
                  className="button my-button"
                  onClick={() =>
                    settings.viewingHistory
                      ? setSettings({
                          ...settings,
                          viewingHistory: false,
                          displayOffset: 0,
                        })
                      : setSettings({
                          ...settings,
                          viewingHistory: true,
                          displayOffset: 0,
                        })
                  }>
                  {!settings.viewingHistory ? 'View History' : 'View Products'}
                </a>
                <a className="button is-primary" onClick={handleModal}>
                  <strong>REDEEM POINTS</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <PointsModal
        modal={modal}
        handleModal={handleModal}
        fetchMorePoints={fetchMorePoints}
      />
    </>
  );
}

export default Nav;
