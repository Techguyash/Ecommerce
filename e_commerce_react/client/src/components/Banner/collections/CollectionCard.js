import React from "react";

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
        <a href="#" className="collection__view">
          View collection
        </a>
      </div>
    </div>
  );
};

export default CollectionCard;
