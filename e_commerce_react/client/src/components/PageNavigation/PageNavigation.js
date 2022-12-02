import React from "react";
import styles from "./PageNavigation.module.css";

const PageNavigation = ({ title }) => {
  let trimmedTitle = title.slice(0, 20);
  if (title.length > 20) {
    trimmedTitle += "...";
  }
  return (
    <>
      <div className={styles.pageNavContainer}>
        <h3 className={styles.home}>Home</h3>/<h4>{trimmedTitle}</h4>
      </div>
    </>
  );
};

export default PageNavigation;
