import React from "react";
import "./SingleProduct.css";

import { AiFillStar } from "react-icons/ai";
import { BiCheckShield } from "react-icons/bi";
import { FaShippingFast } from "react-icons/fa";
import { TbReplace } from "react-icons/tb";
import CurrencySymbol from "../../components/UI/CurrencySymbol";
import LeftPane from "./LeftPane";
import Star from "../../components/UI/Star/Star";
import PageNavigation from "../../components/PageNavigation/PageNavigation";
import AddToCart from "../../components/AddToCart/AddToCart";
const SingleProduct = () => {
  const colors = ["#FF0000", "#00FF00", "#808080"];
  return (
    <React.Fragment>
      <div className="singleProd">
        {/* LEFT PANEL */}
        <LeftPane />
        {/* RIGHT PANEL */}
        <div className="rightPart">
          <div className="singleProdNav">
            <PageNavigation title={`SONY Alpha Full Frameeesassdfsf`} />
          </div>
          <div className="prodTitle">
            SONY Alpha Full Frame ILCE-7M2K/BQ IN5 Mirrorless Camera Body with
            28 - 70 mm Lens (Black)
          </div>
          {/* review and rating */}
          <div className="rating_review_panel">
            <div className="rating_review_container">
              <Star stars={3.5} rating={140} />
            </div>
          </div>
          {/* Price area */}
          <div className="pricePanel">
            <div className="offerPrice">
              <CurrencySymbol price={11190} />
            </div>
            <div className="actualPrice">
              <CurrencySymbol price={1219012} />
            </div>
            <div className="offerPercent">33% off</div>
          </div>

          <div className="services">
            <div className="freeDelivery">
              <FaShippingFast />
              <span className="service_desc">Fast Delivery</span>
            </div>
            <div className="replacementPolicy">
              <TbReplace />
              <span className="service_desc">30 Days Repalcement Policy</span>
            </div>
            <div className="warranty">
              <BiCheckShield />
              <span className="service_desc">1 year warranty</span>
            </div>
          </div>

          <div className="prodDescript">
            <div className="descriptTitle">Product Summary</div>
            <div className="descriptContent">
              Click breathtaking photos and blur-free videos with this Sony α7
              II DSLR camera - it provides you immense freedom to reinvent your
              photography skills. This high-quality camera features a 5-axis
              Image Stabilisation, a 35 mm Full-frame 24.3 MP Exmor CMOS Sensor,
              and a Sony BIONZ X Image Processing Engine to allow you to capture
              detailed, crisp, and blur-free images and movies.
            </div>
          </div>
          <div className="inStock">
            <span className="bold">Available :</span>
            {/* <span style={{ color: "green", fontSize: "18px" }}>In Stock</span> */}
            <span style={{ color: "red", fontSize: "18px" }}>Out of Stock</span>
          </div>
          <div className="addToCartSection">
            {/* This section take singleProduct props */}

            <AddToCart product={{ id: 1, colors: colors, stock: 5 }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
