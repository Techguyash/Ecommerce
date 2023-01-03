import React, { useContext } from "react";
import { FilterContext } from "../../../context/filterContext";
import styles from "./BrandFilter.module.css";

const BrandFilter = () => {
  const { all_products, updateFilterValue } = useContext(FilterContext);

  const getUniqueData = (data, field) => {
    let newVal = data.map((currElem) => {
      return currElem[field];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };

  const uniqueBrandList = getUniqueData(all_products, "brandName");

  return (
    <div className={styles.brandFilter}>
      <div className={styles.heading}>Company</div>
      <select name="brand" id="brand" onClick={updateFilterValue}>
        <option key={0} value="all" name="brand">
          All
        </option>
        {uniqueBrandList.map((data, index) => {
          return (
            <option key={index} value={data} name="brand">
              {data}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default BrandFilter;
