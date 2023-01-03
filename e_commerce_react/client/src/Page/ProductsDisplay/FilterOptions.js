import React from "react";

import styles from "./FilterOptions.module.css";
import BrandFilter from "./filters/BrandFilter";
import CategoryFilter from "./filters/CategoryFilter";
import TextFilter from "./filters/TextFilter";

const FilterOptions = () => {
  return (
    <div className={styles.filterParent}>
      <div className={styles.heading}>Filters</div>
      <TextFilter />
      <CategoryFilter />
      <BrandFilter />
    </div>
  );
};

export default FilterOptions;
