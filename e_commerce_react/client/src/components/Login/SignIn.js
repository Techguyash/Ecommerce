import React, { useState } from "react";
import "./Login.css";
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
    <div className="form_container sign_in_container">
      <form onSubmit={submitHandler}>
        <h1>Sign in</h1>
        <div className="social_container">
          <a className="social">
            <FaFacebookF />
          </a>
          <a className="social">
            <FcGoogle />
          </a>
        </div>
        <span>use your account</span>
        <input type="email" placeholder="Email" onChange={emailChangeHandler} />
        <input
          type="password"
          placeholder="Password"
          onChange={passwordChangeHandler}
        />
        <button type="submit">Sign In</button>
        <span
          onClick={props.toggleSigningComponent}
          className="createAcc_responsive"
        >
          Dont have account? create one
        </span>
      </form>
    </div>
  );
};

export default SignIn;
