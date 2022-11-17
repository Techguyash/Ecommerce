import React from "react";
import Navbar from "../navBar/Navbar";

const PageLayout = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="main_layout">{props.children}</div>
    </React.Fragment>
  );
};

export default PageLayout;
