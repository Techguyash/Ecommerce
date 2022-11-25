import React, { useState } from "react";

import styles from "./Login.module.css";
import OverLay from "./OverLay";
import OverlayComp from "../../components/UI/OverlayComp";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Login = (props) => {
  const [showLogin, setShowLogin] = useState(false);

  const toggleSigningComponent = () => {
    setShowLogin(!showLogin);
  };

  return (
    <OverlayComp>
      <div className={styles.parent}>
        <div className={`container ${showLogin && "right-panel-active"}`}>
          <SignUp toggleSigningComponent={toggleSigningComponent} />
          <SignIn toggleSigningComponent={toggleSigningComponent} />
          <OverLay toggleSigningComponent={toggleSigningComponent} />
        </div>
      </div>
    </OverlayComp>
  );
};

export default Login;
