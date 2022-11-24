import React from "react";
import styles from "./Login.module.css";
import "./Login.css";
const OverLay = (props) => {
  return (
    <div className="overlay_container">
      <div className="overlay">
        <div className="overlay_panel overlay_left">
          <h1 className={styles.bold}>Welcome to Track Me</h1>
          <p className={styles.para}>All your needs met here</p>
          <button
            onClick={props.toggleSigningComponent}
            className={`${styles.press} ${styles.btn}`}
            id="signIn"
          >
            SignIn
          </button>
        </div>
        <div className="overlay_panel overlay_right">
          <h1 className={styles.bold}>Show yourself</h1>
          <p className={styles.para}> Dont have Account Click here 👇</p>
          <button
            className={`${styles.press} ${styles.btn}`}
            onClick={props.toggleSigningComponent}
            id="signUp"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default OverLay;
