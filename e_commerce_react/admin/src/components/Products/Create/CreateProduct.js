import React, { useState } from "react";
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
  const [formData, setFormData] = useState({});
  const [images, setImages] = useState([]);

  const navigateToproductView = () => {
    navigate("/products/view");
  };

  const saveImageToFirebase = () => {
    if (images[0].file == null) {
      console.log("No image selected");
      return;
    }

    const imageRef = ref(
      storage,
      `products/${formData.title + "_" + v4()}`.trim()
    );

    uploadBytes(imageRef, images[0].file).then((res) => {
      getDownloadURL(res.ref).then((url) => {
        formData.productImgUrl = "Hello dummy url!";
      });
      // console.log(formData);
      onSaveToServer();
    });
  };

  const onSaveToServer = async () => {
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
          <Form formData={formData} />

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
            <ImageUploader images={images} setImages={setImages} />
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
          <Footer />
        </div>
        <SideBar formData={formData} />
      </div>

      <div className="dflex justify-content-between align-items-center my-3">
        <button className="btn btn-danger">Delete</button>
        <button className="btn btn-secondary" onClick={saveImageToFirebase}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateProduct;
