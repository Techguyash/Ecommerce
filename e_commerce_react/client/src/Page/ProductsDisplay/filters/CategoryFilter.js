import React, { useContext } from "react";
import styles from "./CategoryFilter.module.css";
import { ProductContext } from "../../../context/productContext";
import { FilterContext } from "../../../context/filterContext";

const CategoryFilter = () => {
  const { Allcategories } = useContext(ProductContext);

  const {
    updateFilterValue,
    filters: { category },
  } = useContext(FilterContext);

  const categoryValues = Allcategories.filter((curr) => {
    return curr.name;
  });

  return (
    <div className={styles.main}>
      <div className={styles.title}>Categories</div>
      <button
        key={0}
        className={`${styles.list} ${category === "all" && styles.active}`}
        name="category"
        value="all"
        type="button"
        onClick={updateFilterValue}
      >
        All
      </button>

      {categoryValues.map((curr) => {
        return (
          <button
            key={curr.id}
            className={`${styles.list} ${
              category === curr.name && styles.active
            }`}
            name="category"
            value={curr.name}
            type="button"
            onClick={updateFilterValue}
          >
            {curr.name}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
