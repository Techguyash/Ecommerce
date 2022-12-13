import React from "react";

const InventoryCard = ({
  ratingInp,
  replacementPolicyInp,
  warrantyInp,
  stock,
  setRatingInp,
  setReplacementPolicyInp,
  setWarrantyInp,
  setStockInp,
}) => {
  return (
    <div className="products__create__main--inventory card py-2 px-2 bg-white mt-2">
      <h3 className="mb-2">Inventory</h3>
      <div className="products__create__main--inventory--col">
        <div>
          <label>SKU (Stock Keeping Unit)</label>
          <input id="sku" type="text" className="input mt-1" name="sku" />
        </div>
        <div>
          <label>Barcode (ISBN, UPC, GTIN, etc)</label>
          <input
            id="barcode"
            type="text"
            name="barcode"
            className="input mt-1"
          />
        </div>
        <div>
          <label>
            Inventory (Stock Available){" "}
            <span className="my-1 text-danger">*</span>
          </label>
          <input
            id="barcode"
            type="text"
            name="stock"
            className="input mt-1"
            value={stock}
            onChange={(e) => {
              setStockInp(e.target.value);
            }}
          />
        </div>
        <div>
          <label>
            Warranty (in months) <span className="my-1 text-danger">*</span>
          </label>
          <input
            id="warranty"
            type="text"
            name="warranty"
            className="input mt-1"
            value={warrantyInp}
            onChange={(e) => {
              setWarrantyInp(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Replacement policy (No of days)</label>
          <input
            id="warranty"
            type="text"
            name="warranty"
            className="input mt-1"
            placeholder="0 for no replacement"
            value={replacementPolicyInp}
            onChange={(e) => {
              setReplacementPolicyInp(e.target.value);
            }}
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            id="warranty"
            type="text"
            name="warranty"
            className="input mt-1"
            value={ratingInp}
            onChange={(e) => {
              setRatingInp(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
