import React, { useState } from "react";
import styles from "./Login.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
const SignUp = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const phoneChangeHandler = (e) => {
    setPassword(e.target.value);
  };
  const nameChangeHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = () => {
    //TODO: post to server
  };

  return (
    <div className={`form_container sign_up_container`}>
      <form onSubmit={submitHandler} className={styles.form}>
        <h1 className={styles.bold}>Create Account</h1>
        <div className={styles["social_container"]}>
          <a className={styles.social}>
            <FaFacebookF />
          </a>
          <a className={styles.social}>
            <FcGoogle />
          </a>
        </div>
        <span className={styles.f12}>or use your email for registeration</span>
        <input
          type="text"
          placeholder="Name"
          onChange={nameChangeHandler}
          className={styles.inp}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={emailChangeHandler}
          className={styles.inp}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={passwordChangeHandler}
          className={styles.inp}
        />

        <button type="submit" className={styles.btn}>
          Sign Up
        </button>
        <span
          onClick={props.toggleSigningComponent}
          className={styles["createAcc_responsive"]}
        >
          Already having account
        </span>
      </form>
    </div>
  );
};

export default SignUp;
