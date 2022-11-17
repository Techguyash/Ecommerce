import React from "react";
import "./style.css";
const DataRow = (props) => {
  return (
    <div className="home__table--items py-1">
      <p className="home__table--items--col1">
        {/* <strong>5 JUL 20</strong> */}
        <span>{props.col1Data}</span>
      </p>
      <p className="home__table--items--col2">{props.col2Data}</p>
      <p className="home__table--items--col3">{props.col3Data}</p>
      <p className="home__table--items--col4">&#8369; {props.col4Data}</p>
    </div>
  );
};

export default DataRow;
