import React, { useState, useContext, useEffect } from "react";
import styles from "./LeftPane.module.css";

const LeftPane = ({ imageUrl = [{ imageUrl: "" }] }) => {
  const [currImage, setCurrImage] = useState(imageUrl[0].imageUrl);
  const [activeIndex, setactiveIndex] = useState(0);

  const changeCurrentImageHandler = (index) => {
    setCurrImage(imageUrl[index].imageUrl);
    setactiveIndex(index);
  };

  useEffect(() => {
    setCurrImage(imageUrl[0].imageUrl);
  }, [imageUrl]);

  return (
    <div className={styles.leftPart}>
      <div className={styles.image_row}>
        {imageUrl.map((currElem, index) => {
          return (
            <img
              key={index}
              className={index == activeIndex ? styles.active : ""}
              src={currElem.imageUrl}
              alt={currElem.imageId}
              onClick={() => changeCurrentImageHandler(index)}
            />
          );
        })}
      </div>
      <div className={styles.image_full}>
        <div className={styles.prodImgFull}>
          <img src={currImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LeftPane;
