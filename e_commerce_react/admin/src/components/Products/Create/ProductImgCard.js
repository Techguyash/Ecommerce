import React from "react";

const ProductImgCard = (props) => {
  return (
    <li className="products__create__main--media--images--item">
      <i
        className="products__create__main--media--images--item--close fas fa-window-close"
        onClick={(e) => props.removeHandler(props.index)}
      ></i>
      <div
        className="products__create__main--media--images--item--imgWrapper"
        onClick={(e) => props.updateHandler(props.index)}
      >
        <img
          className="products__create__main--media--images--item--img"
          src={props.src}
          alt="shoes"
        />
      </div>
    </li>
  );
};

export default ProductImgCard;
