import React from "react";
import istore from "../../../assets/home/footerstore1.png";
import gstore from "../../../assets/home/footerstore2.png";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer section">
      <div className="footer__container bd-grid">
        <div className="footer__box">
          <h3 className="footer__title">SARA</h3>
          <p className="footer__deal">Product store</p>
          <a href="#">
            <img src={istore} alt="" className="footer__store" />
          </a>
          <a href="#">
            <img src={gstore} alt="" className="footer__store" />
          </a>
        </div>
        <div className="footer__box">
          <h3 className="footer__title">EXPLORE</h3>
          <ul>
            <li>
              <a href="#" className="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Featured
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                New
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Suscribe
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <h3 className="footer__title">OUR SERVICE</h3>
          <ul>
            <li>
              <a href="#" className="footer__link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Free Shipping
              </a>
            </li>
            <li>
              <a href="#" className="footer__link">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__box">
          <h3 className="footer__title">FOLLOW</h3>
          <a href="#" className="footer__social">
            <AiFillFacebook />
          </a>
          <a href="#" className="footer__social">
            <AiOutlineInstagram />
          </a>
          <a href="#" className="footer__social">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>

      <p className="footer__copy">@ 2020 copyrights all reserverd.</p>
    </footer>
  );
};

export default Footer;
