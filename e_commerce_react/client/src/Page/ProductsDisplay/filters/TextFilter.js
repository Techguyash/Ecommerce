import React, { useContext } from "react";
import { FilterContext } from "../../../context/filterContext";
import styles from "./TextFilter.module.css";

const TextFilter = () => {
  const {
    filters: { text },
    updateFilterValue,
  } = useContext(FilterContext);

  return (
    <div className={styles.textFilter}>
      <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
        <input
          type="text"
          name="text"
          value={text}
          className={styles.txtBox}
          placeholder="Product Name"
          onChange={updateFilterValue}
        />
      </form>
    </div>
  );
};

export default TextFilter;
