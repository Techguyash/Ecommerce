import React from "react";
import "./style.css";

const Symbol = () => {
  return (
    <>
      <span>&#8369;</span>
    </>
  );
};

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="home__cards--item px-2 py-2 card">
        <p className="home__cards--title">{props.title}</p>
        <p className="home__cards--count">
          <Symbol />
                  { props.count}
        </p>
        <hr />
        <div className="home__cards--view">
          <a >View Reports</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
