import React from "react";

const FeaturePCard = ({ name, price, imgUrl }) => {
  return (
    <div class="featured__product">
      <div class="featured__box">
        <div class="featured__new">NEW</div>
        <img src={imgUrl} alt="" class="featured__img" />
      </div>
      <div class="featured__data">
        <h3 class="featured__name">{name}</h3>
        <span class="featured__preci">Rs.{price}</span>
      </div>
    </div>
  );
};

export default FeaturePCard;
