import React from "react";
import { useNavigate } from "react-router";
import styles from "./PageNavigation.module.css";

const PageNavigation = ({ title }) => {
  const navigate = useNavigate();

  let trimmedTitle = title.slice(0, 25);
  if (title.length > 20) {
    trimmedTitle += "...";
  }

  const navigateHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className={styles.pageNavContainer}>
        <h3 className={styles.home} onClick={navigateHome}>
          Home
        </h3>
        /<h4>{trimmedTitle}</h4>
      </div>
    </>
  );
};

export default PageNavigation;
