import React from "react";

const OverLay = (props) => {
  return (
    <div className="overlay_container">
      <div className="overlay">
        <div className="overlay_panel overlay_left">
          <h1>Welcome to Track Me</h1>
          <p>All your needs met here</p>
          <button
            onClick={props.toggleSigningComponent}
            className="press"
            id="signIn"
          >
            SignIn
          </button>
        </div>
        <div className="overlay_panel overlay_right">
          <h1>Show yourself</h1>
          <p> Dont have Account Click here 👇</p>
          <button
            className="press"
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
