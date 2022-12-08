import React, { useContext } from "react";
import Navbar from "../navBar/Navbar";
import { ProductsContext } from "../../store/ProductsContext";
import Loader from "../UI/Loader/Loader";
const PageLayout = (props) => {
  const { isLoading } = useContext(ProductsContext);

  return (
    <React.Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <div className="main_layout">{props.children}</div>
        </>
      )}
    </React.Fragment>
  );
};

export default PageLayout;
