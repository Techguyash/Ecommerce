import React, { useRef, useState } from "react";

const InventoryCard = (props) => {
  const skuRef = useRef();
  const barCodeRef = useRef();
  const inventoryeRef = useRef();
  const warrantyRef = useRef();
  const replacementPolicyRef = useRef();
  const ratingRef = useRef();

  const [replacementPolicy, setreplacementPolicy] = useState(0);
  const [rating, setRating] = useState(3.4);

  return (
    <div className="products__create__main--inventory card py-2 px-2 bg-white mt-2">
      <h3 className="mb-2">Inventory</h3>
      <div className="products__create__main--inventory--col">
        <div>
          <label>SKU (Stock Keeping Unit)</label>
          <input
            id="sku"
            type="text"
            className="input mt-1"
            name="sku"
            ref={skuRef}
            onBlur={() => {
              props.formData.sku = skuRef.current.value;
            }}
          />
        </div>
        <div>
          <label>Barcode (ISBN, UPC, GTIN, etc)</label>
          <input
            id="barcode"
            type="text"
            name="barcode"
            ref={barCodeRef}
            className="input mt-1"
            onBlur={() => {
              props.formData.barCode = barCodeRef.current.value;
            }}
          />
        </div>
        <div>
          <label>Inventory (Stock Available)</label>
          <input
            id="barcode"
            type="text"
            name="stock"
            ref={inventoryeRef}
            className="input mt-1"
            onBlur={() => {
              props.formData.stock = inventoryeRef.current.value;
            }}
          />
        </div>
        <div>
          <label>Warranty (in months)</label>
          <input
            id="warranty"
            type="text"
            name="warranty"
            ref={warrantyRef}
            className="input mt-1"
            onBlur={() => {
              props.formData.warranty = warrantyRef.current.value;
            }}
          />
        </div>
        <div>
          <label>Replacement policy (No of days)</label>
          <input
            id="warranty"
            type="text"
            name="warranty"
            value={replacementPolicy}
            className="input mt-1"
            placeholder="0 for no replacement"
            onBlur={() => {
              props.formData.replacementPolicy = replacementPolicy;
            }}
            onChange={(e) => {
              setreplacementPolicy(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            id="warranty"
            type="text"
            name="warranty"
            ref={ratingRef}
            className="input mt-1"
            value={rating}
            onBlur={() => {
              props.formData.rating = rating;
            }}
            onChange={(e) => {
              setRating(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
