import React from "react";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loading}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h2 className={styles.load_txt}>Take a breath.</h2>
    </div>
  );
};

export default Loader;
