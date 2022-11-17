import React from "react";
import CurrencySymbol from "../UI/CurrencySymbol";

const OrderItem = (props) => {
  return (
    <div className="table--items">
      <a className="table--items--col1 table--items--transactionId">
        {props.orderId}
      </a>
      <p className="table--items--col2">{props.date}</p>
      <p className="table--items--col3">{props.customer}</p>
      <p className="table--items--col4">
        {/* badge-abandoned
              badge-pending
              badge-paid */}
        <span className={`badge-${props.paymentStatus} px-1`}>
          {props.paymentStatus}
        </span>
      </p>
      <p className="table--items--col5">{props.fulfillment}</p>
      {/* indicator-completed --green
          indicator-shipped -- blue
          indicator-processed - yellow */}
      <p className="table--items--col6">
        <i
          className={`table--items--indicator indicator-${props.fulfillment} fas fa-circle`}
        ></i>
      </p>
      <p className="table--items--col7">
        <CurrencySymbol />
        {props.total}
      </p>
    </div>
  );
};

export default OrderItem;
