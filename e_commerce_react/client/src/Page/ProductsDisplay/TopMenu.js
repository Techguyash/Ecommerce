import React, { useContext } from "react";
import styles from "./TopMenu.module.css";
import { BsGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { FilterContext } from "../../context/filterContext";
import SortDropDown from "../../components/UI/SortDropDown/SortDropDown";

const TopMenu = ({ count }) => {
  const { grid_view, setGridView, setListView } = useContext(FilterContext);

  return (
    <div className={styles.col_2_menu}>
      <div className={styles.toggleBtn}>
        <button
          className={`${styles.btn} ${grid_view && styles.active}`}
          onClick={setGridView}
        >
          <BsGridFill />
        </button>
        <button
          className={`${styles.btn} ${!grid_view && styles.active}`}
          onClick={setListView}
        >
          <FaList />
        </button>
      </div>
      <div className={styles.productCount}>{count} Products Found.</div>
      <div className={styles.sortDropDown}>
        <SortDropDown />
      </div>
    </div>
  );
};

export default TopMenu;
