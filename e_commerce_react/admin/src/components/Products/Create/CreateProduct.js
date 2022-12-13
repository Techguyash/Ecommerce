import React, { useState, useContext } from "react";

import { ProductsContext } from "../../../store/ProductsContext";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import axios from "../../axiosInstance";
import { storage } from "../../../util/Firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import ImageUploader from "../../UI/ImageUploader/ImageUploader";
import Footer from "./Variants";
import Form from "./Form";
import InventoryCard from "./ProductUtils/InventoryCard";
import PricingCard from "./ProductUtils/PricingCard";
import SideBar from "./SideBar";
const CreateProduct = () => {
  const navigate = useNavigate();
  const { setLoading, unSetLoading, getProducts } = useContext(ProductsContext);
  const [formData, setFormData] = useState({
    published: false,
  });
  const [images, setImages] = useState([]);
  // Form input data
  const [productName, setProductName] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [brandNameInput, setBrandNameInput] = useState("");
  const [featuredProduct, setFeaturedProduct] = useState(false);

  //pricing input fields
  const [pricingInput, setPricingInput] = useState(0);
  const [originalPriceInput, setOriginalPriceInput] = useState(0);

  //inventory input fields
  const [ratingInp, setRatingInp] = useState(3.4);
  const [replacementPolicyInp, setReplacementPolicyInp] = useState(0);
  const [warrantyInp, setWarrantyInp] = useState(0);
  const [stock, setStockInp] = useState(0);

  //sidebar --> category
  const [category, setCategory] = useState(null);

  //product variants
  const [colorsArray, setColorsArray] = useState([
    "Red",
    "Green",
    "Blue",
    "Yellow",
  ]);
  const [sizeArray, setSizes] = useState(["S", "M", "L", "XL"]);

  //form valdattions

  const checkFormInvalid = () => {
    let result = false;
    if (
      productName.length < 6 ||
      descriptionInput.length < 15 ||
      brandNameInput.length < 3 ||
      parseInt(originalPriceInput) <= 0 ||
      parseInt(pricingInput) < parseInt(originalPriceInput) ||
      images.length < 1
    ) {
      result = true;
    }
    return result;
  };

  const saveAndPublishHandler = () => {
    formData.published = true;
    onSaveToServer();
  };

  const navigateToproductView = () => {
    navigate("/products/view");
  };

  const uploadImagesToFireBase = async () => {
    const imageUrl = [];
    if (images.length < 1) {
      console.log("No image selected");
      return;
    }

    const imageData = [];
    for (const item of images) {
      const imageRef = ref(
        storage,
        `products/${formData.title + "_" + v4()}`.trim()
      );
      imageData.push(uploadBytes(imageRef, item.file));
    }
    const uploadResults = await Promise.all(imageData);
    // console.log(uploadResults);
    for (const item of uploadResults) {
      imageUrl.push(getDownloadURL(item.ref));
    }
    const downloadURLResult = await Promise.all(imageUrl);
    const data = [];
    for (const item of downloadURLResult) {
      data.push(item);
    }
    return data;
  };

  const onSaveToServer = async () => {
    if (checkFormInvalid()) {
      return;
    }
    setLoading();

    const ImageUrls = await uploadImagesToFireBase();

    //setting the payload data
    formData.productName = productName;
    formData.price = pricingInput;
    formData.originalPrice = originalPriceInput;
    formData.barCode = 0;
    formData.category = category;
    formData.sku = 1;
    formData.warranty = warrantyInp;
    formData.colorVariants = colorsArray;
    formData.rating = ratingInp;
    formData.stock = stock;
    formData.brandName = brandNameInput;
    formData.replacementPolicy = replacementPolicyInp;
    formData.imageUrl = ImageUrls;
    formData.description = descriptionInput;
    formData.featuredProduct = featuredProduct;

    ///setting the payload parameter completed
    console.log(formData);
    axios
      .post("/products", formData)
      .then((response) => {
        console.log(formData);
        console.log(response);
        if (response.data.isSuccess && !response.data.isError) {
          unSetLoading();
          swal("Product created Successfully !", {
            icon: "success",
          }).then((value) => {
            getProducts();
            navigate("/products/view");
          });
        }
      })
      .catch((err) => {
        console.log(err);
        unSetLoading();
      });
  };

  return (
    <div className="products__create">
      <div className="products__create__titlebar dflex justify-content-between align-items-center">
        <div className="products__create__titlebar--item">
          <div className="breadcramb mt-3" onClick={navigateToproductView}>
            <i className="fas fa-angle-left mr-1"></i>Products
          </div>
          <h1 className="my-1">Add Product</h1>
        </div>
        <div className="products__create__titlebar--item">
          <button className="btn btn-light" onClick={navigateToproductView}>
            Discard
          </button>
          <button className="btn btn-secondary ml-1">Save</button>
        </div>
      </div>
      <div className="products__create__cardWrapper mt-2">
        <div className="products__create__main">
          <Form
            formData={formData}
            productName={productName}
            setProductName={setProductName}
            descriptionInput={descriptionInput}
            setDescriptionInput={setDescriptionInput}
            brandNameInput={brandNameInput}
            setBrandNameInput={setBrandNameInput}
            featuredProduct={featuredProduct}
            setFeaturedProduct={setFeaturedProduct}
          />

          <div className="products__create__main--media card py-2 px-2 bg-white mt-2">
            <h3>Media</h3>

            {productName.length > 5 ? (
              <ImageUploader images={images} setImages={setImages} />
            ) : (
              <h4 className="mt-2" style={{ fontWeight: "400", color: "red" }}>
                Please Enter the product name first
              </h4>
            )}
            <div className="products__create__main--media--images mt-2">
              <ul className="products__create__main--media--images--list list-unstyled"></ul>
            </div>
          </div>
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
          <Footer
            colorsArray={colorsArray}
            sizeArray={sizeArray}
            setColorsArray={setColorsArray}
            setSizes={setSizes}
          />
        </div>
        <SideBar
          selectedCategory={category}
          setSelectedCategory={setCategory}
        />
      </div>

      <div className="dflex justify-content-between align-items-center my-3">
        <button className="btn btn-danger" onClick={saveAndPublishHandler}>
          Save and publish
        </button>
        <button className="btn btn-secondary" onClick={onSaveToServer}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
