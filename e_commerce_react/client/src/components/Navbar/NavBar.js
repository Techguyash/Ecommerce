import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Button from "../UI/Button";

const NavBar = (props) => {
  const { toggleShowLogin } = useContext(AuthContext);
  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <h3 className="nav__logo">TRACKME</h3>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <h4 className="nav__link active">Home</h4>
            </li>
            <li className="nav__item">
              <h4 className="nav__link">Featured</h4>
            </li>
            <li className="nav__item">
              <h4 href="#new" className="nav__link">
                New
              </h4>
            </li>
            <li className="nav__item">
              <h4 className="nav__link">Suscribed</h4>
            </li>
            <li className="nav__item">
              <h4 className="nav__link" onClick={toggleShowLogin}>
                Login
              </h4>
            </li>
          </ul>
        </div>

        <div>
          <i className="bx bxs-cart nav__cart"></i>
          <i className="bx bx-menu nav__toggle" id="nav-toggle"></i>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
