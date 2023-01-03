import React, { useContext } from "react";
import { FilterContext } from "../../../context/filterContext";
import styles from "./SortDropDown.module.css";

const SortDropDown = () => {
  const { sorting } = useContext(FilterContext);
  return (
    <div className={styles.sortDropDown}>
      <form action="#">
        <label htmlFor="sort"></label>
        <select
          name="sort"
          id="sort"
          className={styles.select}
          onClick={sorting}
        >
          <option value="lowest">Price (Lowest)</option>
          <option value="highest">Price (Highest)</option>
          <option value="a-z">Name (a-z)</option>
          <option value="z-a">Name (z-a)</option>
        </select>
      </form>
    </div>
  );
};

export default SortDropDown;
