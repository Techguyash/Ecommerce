import React, { useState } from "react";
import "./Login.css";
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
    <div className="form_container sign_up_container">
      <form onSubmit={submitHandler}>
        <h1>Create Account</h1>
        <div className="social_container">
          <a className="social">
            <FaFacebookF />
          </a>
          <a className="social">
            <FcGoogle />
          </a>
          <span className="social">
            <i className="fab fa-google-plus-g"></i>
          </span>
          <span className="social">
            <i className="fab fa-linkedin-in"></i>
          </span>
        </div>
        <span>or use your email for registeration</span>
        <input type="text" placeholder="Name" onChange={nameChangeHandler} />
        <input type="email" placeholder="Email" onChange={emailChangeHandler} />
        <input
          type="password"
          placeholder="Password"
          onChange={passwordChangeHandler}
        />
        <input type="tel" placeholder="Phone" onChange={phoneChangeHandler} />
        <button type="submit" className="btn_sign">
          Sign Up
        </button>
        <span
          onClick={props.toggleSigningComponent}
          className="createAcc_responsive"
        >
          Already having account
        </span>
      </form>
    </div>
  );
};

export default SignUp;
