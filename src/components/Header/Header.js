import './headerStyles.css';

import header from '../../assets/header-x1.png';

function Header() {
  return (
    <header className="header">
      <img src={header} alt="Header" className="header-bg" />
      <h1 className="header-heading">Rewards Store</h1>
    </header>
  );
}

export default Header;
