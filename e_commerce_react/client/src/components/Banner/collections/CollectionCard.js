import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = ({ img, heading, title }) => {
  return (
    <div className="collection__box">
      <img src={img} alt="" className="collection__img" />
      <div className="collection__data">
        <h2 className="collection__title">
          <span className="collection__subtitle">{heading}</span>
          <br />
          {title}
        </h2>
        <Link to="#" className="collection__view">
          View collection
        </Link>
      </div>
    </div>
  );
};

export default CollectionCard;
