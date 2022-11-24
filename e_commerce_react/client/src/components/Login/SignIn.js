import React, { useState } from "react";

import styles from "./Login.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
    console.log(password);
  };

  const submitHandler = () => {
    //TODO: post to server
  };

  return (
    <div className={`${styles.form_container} ${styles.sign_in_container}`}>
      <form onSubmit={submitHandler} className={styles.form}>
        <h1 className={styles.bold}>Sign in</h1>
        <div className={styles.social_container}>
          <a className={styles.social}>
            <FaFacebookF />
          </a>
          <a className={styles.social}>
            <FcGoogle />
          </a>
        </div>
        <span className={styles.f12}>use your account</span>
        <input
          type="email"
          placeholder="Email"
          onChange={emailChangeHandler}
          className={styles.inp}
        />
        <input
          className={styles.inp}
          type="password"
          placeholder="Password"
          onChange={passwordChangeHandler}
        />
        <button type="submit" className={styles.btn}>
          Sign In
        </button>
        <span
          onClick={props.toggleSigningComponent}
          className={styles["createAcc_responsive"]}
        >
          Dont have account? create one
        </span>
      </form>
    </div>
  );
};

export default SignIn;
