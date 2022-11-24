import React, { useState } from "react";

import styles from "./Login.module.css";
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
      <div className={styles.parent}>
        <div className={`container ${showLogin && "right-panel-active"}`}>
          <SignUp toggleSigningComponent={toggleSigningComponent} />
          <SignIn toggleSigningComponent={toggleSigningComponent} />
          <OverLay toggleSigningComponent={toggleSigningComponent} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
