import React from "react";
import styles from "./FilterOptions.module.css";
import CategoryFilter from "./filters/CategoryFilter";
import TextFilter from "./filters/TextFilter";

const FilterOptions = () => {
  return (
    <div className={styles.filterParent}>
      <TextFilter />
      <CategoryFilter />
    </div>
  );
};

export default FilterOptions;
