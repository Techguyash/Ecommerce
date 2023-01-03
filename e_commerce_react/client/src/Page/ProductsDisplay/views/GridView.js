import React, { useContext } from "react";
import ProductCard from "../../../components/UI/ProductGridViewCard/ProductCard";
import { FilterContext } from "../../../context/filterContext";
import styles from "./GridView.module.css";
const GridView = () => {
  const { filter_products } = useContext(FilterContext);

  return (
    <div className={styles.product_Grid_View}>
      {filter_products.map((val) => {
        return <ProductCard product={val} key={val.productId} />;
      })}
    </div>
  );
};

export default GridView;
