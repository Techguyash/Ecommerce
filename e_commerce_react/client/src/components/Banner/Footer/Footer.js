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
    <footer class="footer section">
      <div class="footer__container bd-grid">
        <div class="footer__box">
          <h3 class="footer__title">SARA</h3>
          <p class="footer__deal">Product store</p>
          <a href="#">
            <img src={istore} alt="" class="footer__store" />
          </a>
          <a href="#">
            <img src={gstore} alt="" class="footer__store" />
          </a>
        </div>
        <div class="footer__box">
          <h3 class="footer__title">EXPLORE</h3>
          <ul>
            <li>
              <a href="#" class="footer__link">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Featured
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                New
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Suscribe
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__box">
          <h3 class="footer__title">OUR SERVICE</h3>
          <ul>
            <li>
              <a href="#" class="footer__link">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Free Shipping
              </a>
            </li>
            <li>
              <a href="#" class="footer__link">
                Gift Cards
              </a>
            </li>
          </ul>
        </div>

        <div class="footer__box">
          <h3 class="footer__title">FOLLOW</h3>
          <a href="#" class="footer__social">
            <AiFillFacebook />
          </a>
          <a href="#" class="footer__social">
            <AiOutlineInstagram />
          </a>
          <a href="#" class="footer__social">
            <AiOutlineTwitter />
          </a>
        </div>
      </div>

      <p class="footer__copy">@ 2020 copyrights all reserverd.</p>
    </footer>
  );
};

export default Footer;
