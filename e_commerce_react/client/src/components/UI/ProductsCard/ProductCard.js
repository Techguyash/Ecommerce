import React from "react";
import styles from "./ProductCard.module.css";
import img from "../../../assets/home/feature1.png";
import CurrencySymbol from "../CurrencySymbol";
import Star from "../Star/Star";
import { useNavigate } from "react-router";
const ProductCard = () => {
  const navigate = useNavigate();

  const navigateToSingleProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className={styles.card}
      onClick={() => {
        navigateToSingleProduct(21);
      }}
    >
      <div className={styles.prdImg}>
        <img src={img} />
      </div>
      <div className={styles.prdContent}>
        <div className={styles.name}>
          Xbox One Kinect Sensor with Kinect Adapter For Windows
        </div>
        <div className={styles.brand}>Microsoft</div>
        <Star stars={4.2} />
        <div className={styles.price}>
          <CurrencySymbol price={1045} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
