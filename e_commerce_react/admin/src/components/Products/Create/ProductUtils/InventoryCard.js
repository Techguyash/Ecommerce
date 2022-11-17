import React, { useRef } from "react";

const InventoryCard = (props) => {
  const skuRef = useRef();
  const barCodeRef = useRef();
  const inventoryeRef = useRef();

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
              props.formData.inventory = inventoryeRef.current.value;
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default InventoryCard;
