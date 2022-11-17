import React from "react";
import CurrencySymbol from "../UI/CurrencySymbol";

const CustomerIRowtem = (props) => {
  return (
    <div className="table--items customers__items">
      <div className="">
        <h4>{props.name}</h4>
        <p>{props.address}</p>
      </div>
      <p className="table--items--col2">{props.totalOrder}</p>
      <p className="table--items--col3">
        <CurrencySymbol /> {props.totalPurchased}
      </p>
    </div>
  );
};

export default CustomerIRowtem;
