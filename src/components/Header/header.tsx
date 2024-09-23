import style from './header.module.css';
import logo from './../../assets/logo.svg';

const Header = () => {
  return (
    <header className={style.header}>
      <a href="/" className={style.header__logo} rel="noopener noreferrer">
        <img src={logo} alt="Logo Currency Conversor" />
      </a>
    </header>
  );
};

export default Header;
