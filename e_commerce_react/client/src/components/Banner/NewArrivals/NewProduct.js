import React from "react";
import Button from "../../UI/Button";

const NewProduct = ({ img }) => {
  return (
    <div className="new__box">
      <img src={img} alt="" className="new__img" />

      <div className="new__link">
        <Button> VIEW PRODUCT</Button>
      </div>
    </div>
  );
};

export default NewProduct;
