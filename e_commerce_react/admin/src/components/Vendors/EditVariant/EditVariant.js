import React from "react";
import { useNavigate } from "react-router-dom";
import defaultImg from "../../../assets/default-image.png";

const VariantList = () => {
  return (
    <li className="products__variant__edit--sidebar--variants--item">
      <div className="products__variant__edit--sidebar--variants--item--imgWrapper">
        <img
          src={defaultImg}
          alt=""
          className="products__variant__edit--sidebar--variants--item--img"
        />
      </div>
      <p>Small / Red</p>
    </li>
  );
};

const EditVariant = () => {
  const navigate = useNavigate();
  const navigateProductView = () => {
    navigate("/products/view");
  };
  return (
    <div className="products__variant__edit">
      <div className="products__variant__edit__titlebar dflex justify-content-between align-items-center">
        <div className="products__variant__edit__titlebar--item">
          <div className="breadcramb mt-3" onClick={navigateProductView}>
            <i className="fas fa-angle-left mr-1"></i>Back to product
          </div>
          <h1 className="my-1">Small / Red</h1>
        </div>
        <div className="products__variant__edit__titlebar--item">
          <button className="btn btn-light" onClick={navigateProductView}>
            Discard
          </button>
          <button className="btn btn-secondary ml-1">Save</button>
        </div>
      </div>
      <div className="products__variant__edit--cardWrapper">
        <div className="products__variant__edit--sidebar">
          <div className="products__variant__edit--sidebar--info card bg-white px-2 py-2 mt-2">
            <div className="products__variant__edit--sidebar--info--imgWrapper">
              <img
                src={require("../../../assets/images/10.jpg")}
                alt=""
                className="products__variant__edit--sidebar--info--img"
              />
            </div>
            <div>
              <p className="mb-1">iPhone EX Pro</p>
              <p className="mb-1">7 variants</p>
              <a>Back to product</a>
            </div>
          </div>

          <div className="products__variant__edit--sidebar--variants card bg-white mt-2">
            <h3 className="px-2 py-2">Variants</h3>
            <ul className="products__variant__edit--sidebar--variants--list">
              <VariantList />
              <VariantList />
              <VariantList />
            </ul>
          </div>
        </div>
        <div className="products__variant__edit--main my-2">
          <div className="products__variant__edit--main--options card bg-white px-2 py-2">
            <h3 className="mb-1">Options</h3>

            <div className="products__variant__edit--main--options--wrapper">
              <div className="products__variant__edit--main--options--list">
                <div className="products__variant__edit--main--options--item my-1">
                  <p className="mb-1">Size</p>
                  <input className="input" type="text" placeholder="Small" />
                </div>
                <div className="products__variant__edit--main--options--item my-1">
                  <p className="mb-1">Color</p>
                  <input className="input" type="text" placeholder="Red" />
                </div>
              </div>

              <div className="products__variant__edit--main--options--upload">
                <div className="products__variant__edit--main--options--upload--imgWrapper mb-2">
                  <img
                    src="/assets/images/default-image.png"
                    alt=""
                    className="products__variant__edit--main--options--upload--img hide-item"
                  />
                  <img
                    src={require("../../../assets/images/5-3.jpg")}
                    alt=""
                    className="products__variant__edit--main--options--upload--img"
                  />
                </div>

                <a>Choose Existing</a>
              </div>
            </div>
          </div>

          <div className="products__variant__edit--main--pricing mt-2 card bg-white px-2 py-2">
            <h3>Pricing</h3>

            <div className="products__variant__edit--main--pricing--inputWrapper mt-2">
              <div>
                <p className="mb-1">Price</p>
                <input type="number" className="input" />
              </div>
              <div>
                <p className="mb-1">Compare at Price</p>
                <input type="text" className="input" placeholder="40.00" />
              </div>
            </div>
          </div>

          <div className="products__variant__edit--main--inventory mt-2 card bg-white px-2 py-2">
            <h3>Inventory</h3>

            <div className="products__variant__edit--main--inventory--inputWrapper mt-2">
              <div>
                <p className="mb-1">SKU (Stock Keeping Unit)</p>
                <input type="text" className="input" placeholder="JFSDL-321" />
              </div>
              <div>
                <p className="mb-1">Barcode (ISBN, UPC, GTIN, etc.)</p>
                <input
                  type="text"
                  className="input"
                  placeholder="4324234234U90"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditVariant;
