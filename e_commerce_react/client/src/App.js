import React, { useContext, useState } from "react";
import { Route, Routes } from "react-router";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import { AuthContext } from "./context/authContext";
import Home from "./Page/Home/Home";
import Login from "./Page/Login/Login";
import ProductDisplay from "./Page/ProductsDisplay/ProductDisplay";
import SingleProduct from "./Page/SingleProduct/SingleProduct";
function App() {
  const { showLoginScreen } = useContext(AuthContext);
  const [showNavDropDown, setshowNavDropDown] = useState(false);
  const disbleNavDropDown = () => {
    if (showNavDropDown) {
      setshowNavDropDown(false);
    }
  };

  return (
    <React.Fragment>
      <div className="home">
        <NavBar
          showNavDropDown={showNavDropDown}
          setshowNavDropDown={setshowNavDropDown}
        />
        <div onClick={disbleNavDropDown}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product/:id"
              exact
              element={<SingleProduct />}
            ></Route>
            <Route path="/showproducts" element={<ProductDisplay />} />
          </Routes>
        </div>
      </div>

      {showLoginScreen && <Login />}
    </React.Fragment>
  );
}

export default App;
