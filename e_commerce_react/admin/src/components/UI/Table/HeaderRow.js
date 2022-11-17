import React from "react";
import "./style.css";
const HeaderRow = (props) => {
  return (
    <div className="home__table--heading mt-2">
      <p className="home__table--heading--col1">{props.col1}</p>
      <p className="home__table--heading--col2">{props.col2}</p>
      <p className="home__table--heading--col3">{props.col3}</p>
      <p className="home__table--heading--col4">{props.col4}</p>
    </div>
  );
};

export default HeaderRow;
