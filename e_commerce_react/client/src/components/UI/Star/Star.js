import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt, FaStar } from "react-icons/fa";
import styles from "./Star.module.css";

const Star = ({ stars, rating }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className={styles.star} />
        ) : stars >= number ? (
          <FaStarHalfAlt className={styles.star} />
        ) : (
          <AiOutlineStar className={styles.star} />
        )}
      </span>
    );
  });

  return (
    <div className={styles.star_content}>
      <div>{ratingStar}</div>
      {/* <div className={styles.customerReview}>{rating} customers reviewed </div> */}
    </div>
  );
};

export default Star;
