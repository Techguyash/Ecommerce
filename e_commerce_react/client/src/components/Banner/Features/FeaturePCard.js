import React from "react";

const FeaturePCard = ({ name, price, imgUrl }) => {
  return (
    <div className="featured__product">
      <div className="featured__box">
        <div className="featured__new">NEW</div>
        <img src={imgUrl} alt="" className="featured__img" />
      </div>
      <div className="featured__data">
        <h3 className="featured__name">{name}</h3>
        <span className="featured__preci">Rs.{price}</span>
      </div>
    </div>
  );
};

export default FeaturePCard;
