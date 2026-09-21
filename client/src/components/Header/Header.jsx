import logo from "../../assets/Z_Energy_logo.png";
import searchIcon from "../../assets/searchIcon.png";
import burgericon from "../../assets/burgericon.png";
import line1 from "../../assets/line1.png";
import "./Header.css";

function Header( {onSearchClick} ) {
  return (
    <header className="header">
      <div className="header-top">
        <div className="header-left">
          <img src={logo} alt="Z Energy" />

          <button type="button" className="personal-button">
            For personal
          </button>

          <a href="#">For Business</a>
        </div>

        <div className="header-right">
          <a href="#">Download App</a>
          <a href="#">About Z</a>

          <button
            type="button"
            className="search-button"
            aria-label="Search"
            onClick={onSearchClick}>
            <img src={searchIcon} alt="Search" />
          </button>

          <button className="login-button">
            <span>Login</span>
            <span className="login-arrow">⌄</span>
          </button>

          <img src={line1} alt="line" className="line" />

          <button type="button" className="menu-button" aria-label="Open menu">
            <img src={burgericon} alt="Open menu" />
          </button>
        </div>
      </div>

      <nav className="header-bottom">
        <a href="#">
          At the station
          <span className="nav-arrow">⌄</span>
        </a>

        <a href="#">
          Rewards and promotions
          <span className="nav-arrow">⌄</span>
        </a>

        <a href="#">
          Z App
          <span className="nav-arrow">⌄</span>
        </a>

        <a href="#">
          Locations
          <span className="nav-arrow">⌄</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;