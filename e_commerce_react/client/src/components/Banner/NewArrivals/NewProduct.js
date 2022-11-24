import React from "react";
import Button from "../../UI/Button";

const NewProduct = ({ img }) => {
  return (
    <div class="new__box">
      <img src={img} alt="" class="new__img" />

      <div class="new__link">
        <Button> VIEW PRODUCT</Button>
      </div>
    </div>
  );
};

export default NewProduct;
