import React from "react";
import CurrencySymbol from "../../UI/CurrencySymbol";

const CheckoutItem = (props) => {
  return (
    <div className="table--items abandoned__item">
      <a href=" " className="table--items--col1 table--items--transactionId">
        #{props.orderId}
      </a>
      <p className="table--items--col2">{props.date}</p>
      <p className="table--items--col3">{props.customerName}</p>
      <p className="table--items--col4">
        <span className={`badge-${props.emailSent ? "sent" : "not-sent"} px-1`}>
          {props.emailSent ? "Email Sent" : "Not Sent"}
        </span>
      </p>
      <p className="table--items--col5">
        <span
          className={`badge-${
            props.recoveryStatus ? "recovered" : "not-recovered"
          } px-1`}
        >
          {props.recoveryStatus ? "Recovered" : "Not Recovered"}
        </span>
      </p>

      <p className="table--items--col7">
        <CurrencySymbol /> {props.totalPrice}
      </p>
    </div>
  );
};

export default CheckoutItem;
