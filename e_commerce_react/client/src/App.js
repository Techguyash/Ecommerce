import React, { useContext } from "react";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { AuthContext } from "./context/authContext";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import SingleProduct from "./Page/SingleProduct/SingleProduct";
function App() {
  const { showLoginScreen } = useContext(AuthContext);

  return (
    <React.Fragment>
      <div className="home">
        <NavBar />
        {/* <Home /> */}
      </div>
      {showLoginScreen && <Login />}
      <SingleProduct />
    </React.Fragment>
  );
}

export default App;
