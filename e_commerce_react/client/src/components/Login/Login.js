import React, { useState } from "react";
import "./Login.css";
import OverLay from "./OverLay";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleSigningComponent = () => {
    setShowLogin(!showLogin);
  };

  return (
    <React.Fragment>
      <div className={`container ${showLogin && "right-panel-active"}`}>
        <SignUp toggleSigningComponent={toggleSigningComponent} />
        <SignIn toggleSigningComponent={toggleSigningComponent} />
        <OverLay toggleSigningComponent={toggleSigningComponent} />
      </div>
    </React.Fragment>
  );
};

export default Login;
