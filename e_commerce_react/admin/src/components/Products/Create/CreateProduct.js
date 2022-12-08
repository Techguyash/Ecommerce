import React, { useState, useContext } from "react";
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
import { async } from "@firebase/util";

const CreateProduct = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);
  const [titleInput, setTitleInput] = useState("");
  const [formError, setFormError] = useState({
    productName: false,
    description: false,
    brandName: false,
    originalPrice: false,
    price: false,
    category: false,
  });

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

  const validateFormData = () => {
    let result = false;
    if (formData.productName.length < 5) {
      setFormError((prev) => {
        prev.productName = true;
        result = true;
        return prev;
      });
    }
    if (formData.description.length < 15) {
      setFormError((prev) => {
        prev.description = true;
        result = true;
        return prev;
      });
    }
    if (formData.brandName.length < 1) {
      setFormError((prev) => {
        prev.brandName = true;
        result = true;
        return prev;
      });
    }
    if (formData.originalPrice < 1) {
      setFormError((prev) => {
        prev.originalPrice = true;
        result = true;
        return prev;
      });
    }

    if (formData.price < 1) {
      setFormError((prev) => {
        prev.price = true;
        result = true;
        return prev;
      });
    }

    if (formData.category === null) {
      setFormError((prev) => {
        prev.category = true;
        result = true;
        return prev;
      });
    }

    return result;
  };

  const onSaveToServer = async () => {
    if (validateFormData()) {
      return;
    }

    const ImageUrls = await uploadImagesToFireBase();
    formData.imageUrl = ImageUrls;
    axios
      .post("/products", formData)
      .then((response) => {
        console.log(formData);
        console.log(response);
        if (response.data.isSuccess && !response.data.isError) {
          swal("Product created Successfully !", {
            icon: "success",
          }).then((value) => {
            navigate("/products/view");
          });
        }
      })
      .catch((err) => {
        console.log(err);
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
            titleInput={titleInput}
            setTitleInput={setTitleInput}
          />

          <div className="products__create__main--media card py-2 px-2 bg-white mt-2">
            <h3>Media</h3>
            {/* <form className="products__create__main--media--form mt-2">
              <label
                className="products__create__main--media--form--label"
                for="myfile"
              >
                Add Image
              </label>
              <input
                className="products__create__main--media--form--input"
                type="file"
                id="myfile"
                name="myfile"
              />
            </form> */}
            {titleInput.length > 5 ? (
              <ImageUploader images={images} setImages={setImages} />
            ) : (
              <h4 className="mt-2" style={{ fontWeight: "400", color: "red" }}>
                Please Enter the product name first
              </h4>
            )}
            <div className="products__create__main--media--images mt-2">
              <ul className="products__create__main--media--images--list list-unstyled">
                {/* <ProductImgCard /> */}
                {/* <li className="products__create__main--media--images--item">
                  <form className="products__create__main--media--images--item--form">
                    <label
                      className="products__create__main--media--images--item--form--label"
                      for="myfile"
                    >
                      Add Image
                    </label>
                    <input
                      className="products__create__main--media--images--item--form--input"
                      type="file"
                      id="myfile"
                      name="myfile"
                    />
                  </form>
                </li> */}
              </ul>
            </div>
          </div>
          <PricingCard formData={formData} />
          <InventoryCard formData={formData} />
          <Footer formData={formData} />
        </div>
        <SideBar formData={formData} />
      </div>

      <div className="dflex justify-content-between align-items-center my-3">
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-secondary" onClick={onSaveToServer}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
