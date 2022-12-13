import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import defaultImg from "../../../assets/default-image.png";
import PricingCard from "../Create/ProductUtils/PricingCard";
import InventoryCard from "../Create/ProductUtils/InventoryCard";
import Form from "./Form";
import { ProductsContext } from "../../../store/ProductsContext";

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
  let { id } = useParams();
  const navigate = useNavigate();
  const { getProductsById, singleProduct } = useContext(ProductsContext);

  const [productName, setProductName] = useState(singleProduct.productName);
  const [descriptionInput, setDescriptionInput] = useState(
    singleProduct.description
  );
  const [brandNameInput, setBrandNameInput] = useState(singleProduct.brandName);
  const [featuredProduct, setFeaturedProduct] = useState(
    singleProduct.featuredProduct
  );

  //pricing input fields
  const [pricingInput, setPricingInput] = useState(singleProduct.price);
  const [originalPriceInput, setOriginalPriceInput] = useState(
    singleProduct.originalPrice
  );
  //inventory fields
  const [ratingInp, setRatingInp] = useState(singleProduct.rating);
  const [replacementPolicyInp, setReplacementPolicyInp] = useState(
    singleProduct.replacementPolicy
  );
  const [warrantyInp, setWarrantyInp] = useState(singleProduct.warranty);
  const [stock, setStockInp] = useState(singleProduct.stock);

  if (!id || id === undefined || id === null) {
    navigate("/products/view/");
  }

  const navigateProductView = () => {
    navigate("/products/view");
  };

  useEffect(() => {
    setProductName(singleProduct.productName);
    setDescriptionInput(singleProduct.description);
    setBrandNameInput(singleProduct.brandName);
    setFeaturedProduct(singleProduct.featuredProduct);
    setPricingInput(singleProduct.price);
    setOriginalPriceInput(singleProduct.originalPrice);
  }, [singleProduct]);

  useEffect(() => {
    getProductsById(id);
  }, []);
  console.log(
    productName +
      " " +
      descriptionInput +
      " " +
      brandNameInput +
      " " +
      featuredProduct
  );

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
              <p className="mb-1">{singleProduct.productName}</p>
              <p className="mb-1">7 variants</p>
              <div onClick={navigateProductView}>Back to product</div>
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
          <div className="products__variant__edit--main--options card bg-white px-2 py-2 my-1">
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

          {/* <Form
            title={singleProduct.title}
            description={singleProduct.description}
            product={singleProduct}
          /> */}

          <Form
            productName={productName}
            setProductName={setProductName}
            descriptionInput={descriptionInput}
            setDescriptionInput={setDescriptionInput}
            brandNameInput={brandNameInput}
            setBrandNameInput={setBrandNameInput}
            featuredProduct={featuredProduct}
            setFeaturedProduct={setFeaturedProduct}
          />
          <PricingCard
            pricingInput={pricingInput}
            setPricingInput={setPricingInput}
            originalPriceInput={originalPriceInput}
            setOriginalPriceInput={setOriginalPriceInput}
          />
          <InventoryCard
            ratingInp={ratingInp}
            replacementPolicyInp={replacementPolicyInp}
            warrantyInp={warrantyInp}
            stock={stock}
            setRatingInp={setRatingInp}
            setReplacementPolicyInp={setReplacementPolicyInp}
            setWarrantyInp={setWarrantyInp}
            setStockInp={setStockInp}
          />
        </div>
      </div>
    </div>
  );
};

export default EditVariant;
