import React from "react";
import ItemList from "./ItemList";
import CurrencySymbol from "../UI/CurrencySymbol";

const FullFillment = () => {
  return (
    <div className="fulfillment">
      <div className="fulfillment__title dflex justify-content-between align-items-center">
        <div>
          <div className="breadcramb mt-3">
            <i className="fas fa-angle-left mr-1"></i>#1043
          </div>
          <h1 className="my-1">Fulfillment</h1>
          <button className="selectBtnFlat">
            <i className="mr-1 fas fa-print"></i>
            Print packing slip
          </button>
        </div>
        <div className="fulfillment__title--cancelBtn">
          <button className="btn btn-light">Cancel</button>
        </div>
      </div>
      <div className="fulfillment__cardWrapper mt-2">
        <div className="fulfillment__main card bg-white py-2 px-2">
          <h3>Mark as fulfilled</h3>
          <p className="my-2">QUANTITY TO FULFILL</p>
          <div className="fulfillment__main--heading my-2">
            <h4>Items</h4>
            <h4>Weight</h4>
            <h4>Quantity</h4>
          </div>
          {/* <!-- list Item 1 --> */}
          <ItemList
            img="1.jpg"
            productName="Nike Super Sports Extreme"
            sku="SKU9543867"
            description="Medium"
            weight="0.5kg"
          />
          <ItemList
            img="2.jpg"
            productName="Nike Super Sports Extreme"
            sku="SKU9543867"
            description="Medium"
            weight="0.3kg"
          />
          <ItemList
            img="3.jpg"
            productName="Nike Super Sports Extreme"
            sku="SKU9543867"
            description="Medium"
            weight="5kg"
          />

          <p className="my-2">
            <strong>TRACKING INFORMATION</strong> (OPTIONAL)
          </p>
          <div className="fulfillment__main--tracking my-2">
            <div>
              <p className="my-1">Tracking Number</p>
              <input className="input" type="text" />
            </div>
            {/* <!-- Select Input Option --> */}
            <div>
              <p className="mt-1">Shipping Carrier</p>
              <select className="input my-1">
                <option value="None">None</option>
                <option value="None">LBC Padala</option>
                <option value="None">J&T</option>
                <option value="None">RJS</option>
                <option value="None">DHL</option>
                <option value="None">FedEx</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="fulfillment__main--notify mt-2">
            <input type="checkbox" id="notify" />
            <label for="notify">
              Send shipment details to your customer now
            </label>
          </div>
        </div>
        <div className="fulfillment__sidebar">
          <div className="fulfillment__sidebar--shippingAddress card bg-white py-1 px-2">
            <h4 className="my-1">Shipping Address</h4>
            <a>Rayjens Code</a>
            <p className="my-1">
              Apple St. Obrero 9500 General Santos City Philippines
            </p>
            <hr />
            <p className="my-1">
              The customer selected
              <strong>
                Standard(
                <CurrencySymbol />
                15.00)
              </strong>{" "}
              at checkout.
            </p>

            <button className="btn btn-secondary btn-block my-2">
              Fulfill Items
            </button>
            <div className="fulfillment__sidebar--cancelBtn">
              <button className="btn btn-light btn-block">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullFillment;
