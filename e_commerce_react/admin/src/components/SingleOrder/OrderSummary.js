import React from "react";

const OrderSummary = (props) => {
  return (
    <div className="singleOrder__main--card py-2 px-3 card mt-2">
      <div className="singleOrder__main--card--heading dflex justify-content-start align-items-center mb-2">
        <div className="singleOrder__main--card--icon--fulfilled">
          <i className="fas fa-check text-white"></i>
        </div>

        <h2 className="ml-1">{props.paymentStatus}</h2>
      </div>

      <div>
        <div className="singleOrder__main--card--paymentDetails">
          <p className="py-1">Subtotal</p>
          <p className="py-1">{props.itemCount} item</p>
          <p className="py-1">&#8369; {props.subTotal}</p>
          <p className="py-1">Shipping</p>
          <p className="py-1">Standard (0.0kg)</p>
          <p className="py-1">&#8369; 0.00</p>
          <p className="py-1">Tax</p>
          <p className="py-1">VAT 20%</p>
          <p className="py-1">&#8369; 0.00</p>
        </div>
        <div className="dflex justify-content-between mb-2">
          <p>Total</p>
          <p>&#8369; {props.subTotal}</p>
        </div>
        <hr />
        <div className="dflex justify-content-between my-2">
          <p>Paid by Customer</p>
          <p>&#8369; {props.paidByCustomer}</p>
        </div>
        <hr />
        <div className="dflex justify-content-end mt-2">
          <button className="singleOrder__main--card--paymentDetails--captureBtn btn btn-secondary ml-auto">
            Capture Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
