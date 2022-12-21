import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiUser } from "react-icons/fi";
import DropDown from "../UI/DropDown/DropDown";

const NavBar = ({ showNavDropDown, setshowNavDropDown }) => {
  const { isLoggedIn, toggleShowLogin } = useContext(AuthContext);

  const LoggedInMenus = () => {
    return (
      <>
        <li className="nav__item">
          <h4 className="nav__link nav_icon">
            <AiOutlineShoppingCart />
          </h4>
        </li>

        <li className="nav__item">
          <h4 className=" nav_icon">
            <DropDown isOpen={showNavDropDown} setisOpen={setshowNavDropDown} />
          </h4>
        </li>
      </>
    );
  };

  return (
    <header className="l-header">
      <nav className="nav bd-grid">
        <div>
          <h3 className="nav__logo">TRACKME</h3>
        </div>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            {/* <li className="nav__item">
              <h4 className="nav__link active">Home</h4>
            </li>
            <li className="nav__item">
              <h4 className="nav__link">Featured</h4>
            </li>
            <li className="nav__item">
              <h4 href="#new" className="nav__link">
                New
              </h4>
            </li> */}

            {/* not logged in states */}
            {!isLoggedIn && (
              <li className="nav__item">
                <h4 className="nav__link loginBtn" onClick={toggleShowLogin}>
                  Login
                </h4>
              </li>
            )}
            {/* logged in states */}
            {isLoggedIn && <LoggedInMenus />}
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
