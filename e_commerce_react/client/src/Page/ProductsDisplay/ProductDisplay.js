import React, { useContext } from "react";
import GridView from "./views/GridView";
import { FilterContext } from "../../context/filterContext";
import ListView from "./views/ListView";
import styles from "./ProductDisplay.module.css";
import TopMenu from "./TopMenu";
import FilterOptions from "./FilterOptions";

const ProductDisplay = () => {
  const { filter_products, grid_view } = useContext(FilterContext);

  return (
    <div className={styles.parent}>
      <div className={styles.row_1}>
        <div className={styles.col_1}>
          <FilterOptions />
        </div>
        <div className={styles.col_2}>
          <TopMenu count={filter_products.length} />
          <div className={styles.productContainer}>
            {grid_view ? <GridView /> : <ListView />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
