import { useContext } from 'react';
import { Context } from '../Context';

import './headerStyles.css';

import header from '../../assets/header-x1.png';
import Modal from '../MainModal/Modal';

function Header() {
  const { settings, closeModal } = useContext(Context);
  return (
    <>
      <header className="header">
        <img src={header} alt="Header" className="header-bg" />
        <h1 className="header-heading">Rewards Store</h1>
      </header>
      <Modal
        title={settings.modal.title}
        msg={settings.modal.msg}
        class={settings.modal.class}
        close={closeModal}
      />
    </>
  );
}

export default Header;
