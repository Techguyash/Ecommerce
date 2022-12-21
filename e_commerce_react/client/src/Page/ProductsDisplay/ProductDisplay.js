import React from "react";
import ProductCard from "../../components/UI/ProductsCard/ProductCard";
import styles from "./ProductDisplay.module.css";

const ProductDisplay = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.row_1}>
        <div className={styles.col_1}>Product filter options</div>
        <div className={styles.col_2}>
          <div className={styles.col_2_menu}>mesdfgsdfgdfgnu</div>

          <div className={styles.col_2_card_container}>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
