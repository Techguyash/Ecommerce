import React, { useState } from "react";
import styles from "./Colors.module.css";
import { TiTick } from "react-icons/ti";

const Colors = ({ colors }) => {
  const [activeColor, setActiveColor] = useState(0);

  const activeColorHandler = (index) => {
    setActiveColor(index);
  };

  return (
    <div className={styles.colorContainer}>
      <span className={styles.colorlbl}>Colors:</span>
      {colors.map((currEle, index) => {
        return (
          <button
            className={`${styles.button} ${
              activeColor === index ? styles["active"] : ""
            }`}
            style={{ backgroundColor: currEle }}
            onClick={() => activeColorHandler(index)}
            key={index}
          >
            {activeColor === index && (
              <TiTick
                style={{
                  color: "whitesmoke",
                  fontSize: "19px",
                  marginLeft: "-2px",
                }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Colors;
