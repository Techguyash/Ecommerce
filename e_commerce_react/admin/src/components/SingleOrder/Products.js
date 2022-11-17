import React from "react";

const Products = (props) => {
  return (
    <li className="singleOrder__main--card--item">
      <div className="singleOrder__main--card--item--imgWrapper">
        <img
          className="singleOrder__main--card--item--img"
          src={require("../../assets/images/" + `${props.img}`)}
          // src={`../../assets/images/${props.img}`}
          alt="1"
        />

        <span className="singleOrder__main--card--item--countWrapper">
          {props.badge}
        </span>
      </div>

      <div className="singleOrder__main--card--item--details dflex justify-content-between">
        <p className="singleOrder__main--card--item--title">
          {props.productName}
        </p>

        <p className="singleOrder__main--card--item--price">
          &#8369; {props.price}
        </p>
        <p className="singleOrder__main--card--item--qty">
          <span className="mr-1">x</span>
          {props.qty}
        </p>
        <p className="singleOrder__main--card--item--total">
          &#8369; {props.total}
        </p>
      </div>
    </li>
  );
};

export default Products;
