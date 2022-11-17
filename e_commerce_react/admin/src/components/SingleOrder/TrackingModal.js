import React from "react";

const TrackingModal = (props) => {
  return (
    <div className="modal singleOrder__main--modal--capturePayment show">
      <div className="modal__content">
        <span className="modal__close singleOrder__main--modal--close--capturePayment">
          &times;
        </span>
        <h3 className="mb-2">Capture Payment</h3>
        <hr />

        <p className="mt-2">
          Processed by <strong>(PayPal) Gatway</strong>
        </p>
        <p className="my-2">VISA (••• •• 4242)</p>
        <div className="inputCurrency mb-2">
          <span className="inputCurrency__symbol">&#8369;</span>
          <input
            type="number"
            value="1012.71"
            className="inputCurrency__input"
          />
          <span className="inputCurrency__currency">PHP</span>
        </div>

        <hr />

        <div className="dflex justify-content-end align-items-center mt-2">
          <button
            onClick={props.addTrackingModalHandler}
            className="singleOrder__main--modal--close--capturePayment btn btn-light mr-2"
          >
            Cancel
          </button>
          <button className="btn btn-secondary">
            Accept  &#8369; 21,012.7
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingModal;
