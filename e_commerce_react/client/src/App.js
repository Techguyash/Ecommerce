import React, { useState, useContext } from "react";
import "./App.css";
import { AuthContext } from "./context/authContext";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
function App() {
  const { showLoginScreen, toggleShowLogin } = useContext(AuthContext);

  return (
    <React.Fragment>
      <Home />
      {showLoginScreen && <Login />}
    </React.Fragment>
  );
}

export default App;
