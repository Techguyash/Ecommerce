import React from "react";
import styles from "./ProductCard.module.css";
import CurrencySymbol from "../CurrencySymbol";
import Star from "../Star/Star";
import { useNavigate } from "react-router";
const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const navigateToSingleProduct = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div
      className={styles.card}
      onClick={() => {
        navigateToSingleProduct(product.productId);
      }}
    >
      <div className={styles.prdImg}>
        <img src={product.imageUrl[0].imageUrl} alt={product.productName} />
      </div>
      <div className={styles.prdContent}>
        <div className={styles.name}>{product.productName}</div>
        <div className={styles.brand}>{product.brandName}</div>
        <Star stars={product.rating} />
        <div className={styles.price}>
          <CurrencySymbol price={product.price} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
