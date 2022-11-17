import React from "react";

const ItemList = (props) => {
  return (
    <div class="fulfillment__main--items">
      <div class="dflex justify-content-start align-items-center">
        <div class="fulfillment__main--items--imgWrapper mr-1">
          <img
            class="fulfillment__main--items--img"
            src={require("../../assets/images/" + `${props.img}`)}
            alt="product 10"
          />
        </div>
        <div>
          <a class="fulfillment__main--items--productName">
            {props.productName}
          </a>
          <p>{props.description}</p>
          <p>SKU: {props.sku}</p>
        </div>
      </div>
      <div class="fulfillment__main--items--weight">
        <p>{props.weight}</p>
      </div>
      <div class="fulfillment__main--items--inputWrapper">
        <input
          class="fulfillment__main--items--input"
          type="number"
          value="1"
        />
        <span>of 10</span>
      </div>
    </div>
  );
};

export default ItemList;
