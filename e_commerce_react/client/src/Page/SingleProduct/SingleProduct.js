import React, { useContext, useEffect } from "react";

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
import { useNavigate, useParams } from "react-router";
import { ProductContext } from "../../context/productContext";
const SingleProduct = () => {
  const { getProductsById, singleProduct, isSingleProductLoading } =
    useContext(ProductContext);

  const { id } = useParams();
  const navigate = useNavigate;

  const {
    productId,
    productName,
    brandName,
    stock,
    price,
    imageUrl,
    rating,
    description,
    warranty,
    replacementPolicy,
    colorVariants,
  } = singleProduct;

  useEffect(() => {
    getProductsById(id);
  }, []);

  const colors = ["#FF0000", "#00FF00", "#808080"];
  return (
    <React.Fragment>
      <div className="singleProd">
        {/* LEFT PANEL */}
        {<LeftPane imageUrl={imageUrl} />}
        {/* RIGHT PANEL */}
        <div className="rightPart">
          <div className="singleProdNav">
            <PageNavigation title={`SONY Alpha Fullasdds`} />
          </div>
          <div className="prodTitle">{productName}</div>
          {/* review and rating */}
          <div className="rating_review_panel">
            <div className="rating_review_container">
              <Star stars={rating} rating={140} />
            </div>
          </div>
          {/* Price area */}
          <div className="pricePanel">
            <div className="offerPrice">
              <CurrencySymbol price={price} />
            </div>
            <div className="actualPrice">
              <CurrencySymbol price={price} />
            </div>
            <div className="offerPercent">33% off</div>
          </div>

          <div className="services">
            <div className="freeDelivery">
              <FaShippingFast fontSize={32} />
              <span className="service_desc">Fast Delivery</span>
            </div>
            <div className="replacementPolicy">
              <TbReplace fontSize={32} />
              <span className="service_desc replace_policy">
                {replacementPolicy} Days Repalcement Policy
              </span>
            </div>
            <div className="warranty">
              <BiCheckShield fontSize={32} />
              <span className="service_desc">{warranty} year warranty</span>
            </div>
          </div>

          <div className="prodDescript">
            <div className="descriptTitle">Product Summary</div>
            <div className="descriptContent">{description}</div>
          </div>
          <div className="inStock">
            <span className="bold">Available :</span>
            {stock > 0 ? (
              <span style={{ color: "green", fontSize: "18px" }}>In Stock</span>
            ) : (
              <span style={{ color: "red", fontSize: "18px" }}>
                Out of Stock
              </span>
            )}
          </div>
          <div className="addToCartSection">
            {/* This section take singleProduct props */}

            <AddToCart product={{ id: 1, colors: colors, stock: stock }} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SingleProduct;
