import React from "react";

const ColProdList = () => {
  return (
    <li className="collections__edit__main--products--item">
      <p>1.</p>
      <div className="collections__edit__main--products--item--imgWrapper">
        <img
          className="collections__edit__main--products--item--img"
          src={require("../../../assets/images/3.jpg")}
          alt="collection img"
        />
      </div>
      <a >Super Super Extrme Nike Sports</a>
      <span className="collections__edit__main--products--item--delete">
        <i className="fas fa-times"></i>
      </span>
    </li>
  );
};

export default ColProdList;
