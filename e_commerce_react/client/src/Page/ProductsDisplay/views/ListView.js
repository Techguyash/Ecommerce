import React, { useContext } from "react";
import styles from "./ListView.module.css";

import ProductListView from "../../../components/UI/ProductListViewCard/ProductListView";
import { FilterContext } from "../../../context/filterContext";

const ListView = () => {
  const { filter_products } = useContext(FilterContext);
  return (
    <div className={styles.parent}>
      {filter_products.map((product) => {
        return <ProductListView product={product} key={product.productId} />;
      })}
    </div>
  );
};

export default ListView;
