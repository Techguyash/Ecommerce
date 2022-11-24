import React from "react";

const CollectionCard = ({ img, heading, title }) => {
  return (
    <div class="collection__box">
      <img src={img} alt="" class="collection__img" />
      <div class="collection__data">
        <h2 class="collection__title">
          <span class="collection__subtitle">{heading}</span>
          <br />
          {title}
        </h2>
        <a href="#" class="collection__view">
          View collection
        </a>
      </div>
    </div>
  );
};

export default CollectionCard;
