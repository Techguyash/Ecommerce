import React, { useState } from "react";
import styles from "./LeftPane.module.css";
import img1 from "../../assets/home/feature1.png";
import img2 from "../../assets/home/feature2.png";
import img3 from "../../assets/home/feature3.png";
import img4 from "../../assets/home/feature4.png";

const LeftPane = () => {
  const ImgList = [img1, img2, img3, img4];

  const [currImage, setCurrImage] = useState(ImgList[0]);
  const [activeIndex, setactiveIndex] = useState(0);

  const changeCurrentImageHandler = (index) => {
    setCurrImage(ImgList[index]);
    setactiveIndex(index);
  };

  return (
    <div className={styles.leftPart}>
      <div className={styles.image_row}>
        {ImgList.map((currElem, index) => {
          return (
            <>
              <img
                key={index}
                className={index == activeIndex ? styles.active : ""}
                src={currElem}
                alt={index}
                onClick={() => changeCurrentImageHandler(index)}
              />
            </>
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
