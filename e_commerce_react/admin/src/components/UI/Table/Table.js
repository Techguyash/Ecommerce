import React from "react";
import "./style.css";
import "../../genericStyles.css";

const Table = (props) => {
  return (
    <div className="home__table bg-white card px-3 py-2 my-3">
      <div className="dflex justify-content-between align-items-center">
        <p className="home__table--title">
          <i className="fas fa-cart-arrow-down mr-1"></i>
          <strong>1{props.titleBold}</strong> {props.title}
        </p>
        <span>
          <i className="fas fa-angle-down home__table--toggleBtn"></i>
        </span>
      </div>

      {/* <HeaderRow col1="Date" col2="Address" col3="Qty" col4="Total"></HeaderRow> */}
      {props.children}

      <div className="home__cards--view">
        <a>View All</a>
      </div>
    </div>
  );
};

export default Table;
