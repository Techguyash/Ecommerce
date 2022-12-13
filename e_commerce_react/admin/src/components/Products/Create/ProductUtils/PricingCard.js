import React, { useRef } from "react";

const PricingCard = ({
  pricingInput,
  setPricingInput,
  originalPriceInput,
  setOriginalPriceInput,
}) => {
  return (
    <div className="products__create__main--pricing card py-2 px-2 bg-white mt-2">
      <h3 className="mb-2">Pricing </h3>

      <div className="products__create__main--pricing--col">
        <div>
          <label>
            Cost Price
            <span className="my-1 text-danger">*</span>
          </label>
          <input
            id="compare-price"
            type="text"
            className="input mt-1"
            value={originalPriceInput}
            onChange={(e) => setOriginalPriceInput(e.target.value)}
          />
          {parseInt(originalPriceInput) <= 0 && (
            <p className="my-1 text-danger">Enter valid original price</p>
          )}
        </div>
        <div>
          <label>
            Selling Price <span className="my-1 text-danger">*</span>
          </label>
          <input
            id="price"
            type="text"
            className="input mt-1"
            value={pricingInput}
            onChange={(e) => {
              setPricingInput(e.target.value);
            }}
          />

          {parseInt(pricingInput) < parseInt(originalPriceInput) && (
            <p className="my-1 text-danger">must be greater than cost price</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
