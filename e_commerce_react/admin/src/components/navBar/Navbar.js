import React, { useState } from "react";
import "./styles.css";
import "../genericStyles.css";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.jpg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showOrders, setshowOrders] = useState(false);
  const [showProducts, setshowProducts] = useState(false);

  const toggleOrdersMenuHandler = () => {
    setshowOrders(showOrders ? false : true);
  };

  const toggleProductsMenuHandler = () => {
    setshowProducts(showProducts ? false : true);
  };

  return (
    <React.Fragment>
      <header>
        <div className="header__logo dflex px-2 justify-content-start align-items-center">
          <i className="header__collapse--btn fas fa-align-left"></i>
          <img className="header__logo__img" src={logo} alt="greatweb" />
        </div>
        <div className="header__search px-1 mr-1 dflex justify-content-start align-items-center">
          <i className="header__search--icon fas fa-search"></i>
          <input
            className="header__search__input"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="header__profile px-1 mx-3 dflex justify-content-start align-items-center">
          <div className="header__profile__imgWrapper mr-1">
            <img
              className="header__profile__img"
              src={avatar}
              alt="avatarImage"
            />
          </div>
          <p className="header__profile__name text-white text-bold-500 relative">
            Zander Ford
          </p>
        </div>
      </header>
      {/* profile header */}
      <div>
        <span className="header__profile__name--nav">
          <span className="header__profile__name--nav--pointer">
            <i className="fas fa-sort-up"></i>
          </span>
          <ul className="header__profile__name--nav--list">
            <li className="header__profile__name--nav--item">
              <a className="header__profile__name--nav--link">Profile</a>
            </li>
            <li className="header__profile__name--nav--item">
              <a className="header__profile__name--nav--link">Message</a>
            </li>
            <li className="header__profile__name--nav--item">
              <a className="header__profile__name--nav--link">Logout</a>
            </li>
          </ul>
        </span>
      </div>

      <nav className="nav">
        <div className="nav__wrapper">
          <span className="nav__close">
            <i className="fas fa-window-close"></i>
          </span>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink to="/" className="nav__link nav__active">
                <span className="nav__link--span--icon">
                  <i className="fas fa-home nav__link--icon"> </i>
                </span>
                <span className="nav__link--span--navname">Home</span>
              </NavLink>
            </li>
            <li className="nav__item nav__showOrders">
              <a className="nav__link" onClick={toggleOrdersMenuHandler}>
                <span className="nav__link--span--icon">
                  <i className="fas fa-shopping-bag nav__link--icon"></i>
                </span>
                <span className="nav__link--span--navname">Orders</span>
              </a>
            </li>
            {/* Orders drop down nav */}

            <ul
              className={`sub__nav--list nav__orders--items ${
                showOrders ? "show" : ""
              }`}
            >
              <li className="sub__nav--item">
                <NavLink to="/orders" className="sub__nav--link">
                  Orders
                </NavLink>
              </li>
              <li className="sub__nav--item">
                <NavLink to="/single-order" className="sub__nav--link">
                  Single Order
                </NavLink>
              </li>
              <li className="sub__nav--item">
                <NavLink to="/abandon-checkouts" className="sub__nav--link">
                  Abandoned Checkouts
                </NavLink>
              </li>
            </ul>
            <li className="nav__item nav__showProducts">
              <NavLink
                to="/products/view"
                className="nav__link"
                onClick={toggleProductsMenuHandler}
              >
                <span className="nav__link--span--icon">
                  <i className="fas fa-tags nav__link--icon"> </i>
                </span>
                <span className="nav__link--span--navname">Products</span>
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink to="/customer" className="nav__link">
                <span className="nav__link--span--icon">
                  <i className="fas fa-user nav__link--icon"> </i>
                </span>
                <span className="nav__link--span--navname">Customers</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/vendors" className="nav__link">
                <span className="nav__link--span--icon">
                  <i className="fas fa-user nav__link--icon"> </i>
                </span>
                <span className="nav__link--span--navname">Vendors</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/fulfillment" className="nav__link">
                <span className="nav__link--span--icon">
                  <i className="fas fa-file-invoice-dollar nav__link--icon"></i>
                </span>
                <span className="nav__link--span--navname">FulFillment</span>
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/collection/view" className="nav__link">
                <span className="nav__link--span--icon">
                  <i className="fas fa-cog nav__link--icon"> </i>
                </span>
                <span className="nav__link--span--navname">Collections</span>
              </NavLink>
            </li>
            <ul
              className={`sub__nav--list nav__orders--items ${
                showOrders ? "show" : ""
              }`}
            ></ul>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
