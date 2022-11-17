import React, { useRef } from "react";

const PricingCard = (props) => {
  const originalPrice = useRef();
  const sellingPrice = useRef();
  return (
    <div className="products__create__main--pricing card py-2 px-2 bg-white mt-2">
      <h3 className="mb-2">Pricing</h3>

      <div className="products__create__main--pricing--col">
        <div>
          <label>Price</label>
          <input
            id="price"
            type="text"
            className="input mt-1"
            ref={sellingPrice}
            onBlur={() => {
              props.formData.price = sellingPrice.current.value;
            }}
          />
        </div>
        <div>
          <label>Compare at Original Price</label>
          <input
            id="compare-price"
            type="text"
            className="input mt-1"
            ref={originalPrice}
            onBlur={() => {
              props.formData.originalPrice = originalPrice.current.value;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
