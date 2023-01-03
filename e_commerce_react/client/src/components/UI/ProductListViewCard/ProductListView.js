import React from "react";
import styles from "./ProductListView.module.css";
import CurrencySymbol from "../CurrencySymbol";
import { FaStar } from "react-icons/fa";
import img from "../../../assets/home/new2.png";
import { useNavigate } from "react-router";
const ProductListView = ({ product }) => {
  const {
    productName,
    price,
    rating,
    description,
    brand,
    productId,
    imageUrl,
  } = product;

  const navigate = useNavigate();

  const navigateToSingleProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className={styles.productCard}
      onClick={() => {
        navigateToSingleProduct(productId);
      }}
    >
      <div className={styles.col1}>
        <img src={imageUrl[0].imageUrl} alt={productName} />
      </div>
      <div className={styles.col2}>
        <div className={styles.title}>{productName}</div>
        <div className={styles.brand}>{brand}</div>
        <div className={styles.rating}>
          <div className={styles.ratingText}>
            <FaStar color="white" />
            {rating}
          </div>
        </div>
        <div className={styles.price}>
          <CurrencySymbol price={price} />
        </div>
        <div className={styles.description}>
          <div>
            <b>Description :</b>
          </div>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
