import React, { useState } from "react";
import ColProdList from "./ColProdList";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "../../axiosInstance";
import swal from "sweetalert";

const EditCollection = () => {
  const { state } = useLocation();
  let navigate = useNavigate();

  const { productName, id, count, img, description } = state;

  const [title, setTitle] = useState(productName);
  const [desc, setDesc] = useState(description);
  const [prodImg, setProdImg] = useState(img);
  const [error, setError] = useState("");

  const updateHandler = () => {
    console.log("updateHandler");
    if (title === "" || desc === "" || title.length < 5 || desc.length < 5) {
      setError("Title and description must contain at least 5 characters");
    } else if (title === productName && desc === description) {
      swal(
        "No changes found",
        "There is no changes in the data for this category",
        "error"
      );
      setError(true);
    } else {
      swal({
        title: "Are you sure?",
        text: "You want to update the given values for this Category?",
        icon: "warning",
        buttons: true,
        dangerMode: false,
      }).then((updateData) => {
        if (updateData) {
          invokeUpdateAPI(title, desc);
        }
      });
    }
  };

  const invokeUpdateAPI = (title, desc) => {
    let payload = {
      id: id,
      name: title,
      description: desc,
      totalProducts: count,
    };

    axios
      .put(`/category`, payload)
      .then((response) => {
        console.log(response);
        swal("Data has been updated Successfully !🤟", {
          icon: "success",
        }).then((value) => {
          navigate("/collection/view");
        });
      })
      .catch((err) => {
        swal("Error Occured 😓", {
          icon: "error",
        }).then((value) => {
          navigate("/collection/view");
        });
        console.log(err);
      });
  };

  return (
    <div className="collections__edit">
      <div className="collections__edit__titlebar dflex justify-content-between align-items-center">
        <div className="collections__edit__titlebar--item">
          <div
            className="breadcramb mt-3"
            onClick={() => {
              navigate("/collection/view");
            }}
          >
            <i className="fas fa-angle-left mr-1"></i>Collections
          </div>

          <h1 className="my-1">Appliances</h1>
        </div>
        <div className="collections__edit__titlebar--item">
          {/* <button className="btn btn-danger">Delete collection</button> */}
          <button className="btn btn-secondary ml-1" onClick={updateHandler}>
            Save
          </button>
        </div>
      </div>

      <div className="collections__edit__cardWrapper mt-2">
        <div className="collections__edit__main">
          <div className="collections__edit__main--addInfo card py-2 px-2 bg-white">
            <p className="mb-1">Title</p>
            <input
              type="text"
              placeholder="e.g. Summer Collection, Under $100, Best picks"
              className="input"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />

            <p className="my-1">Description (optional)</p>
            <textarea
              cols="30"
              rows="10"
              className="textarea"
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="collections__edit__main--products card py-2 px-2 mt-2 bg-white">
            <h3>Products</h3>
            <div className="collections__edit__main--products--filter my-2">
              <div className="inputBrowse">
                <i className="inputBrowse__icon fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search products"
                  className="inputBrowse__input"
                />
              </div>
              <button className="btn btn-light">Browse</button>
            </div>
            <ul className="list-unstyled">
              <ColProdList />
              <ColProdList />
              <ColProdList />
            </ul>
          </div>
        </div>
        <div className="collections__edit__sidebar">
          <div className="card py-2 px-2 bg-white">
            <h3>Collection Image</h3>
            <form className="collections__edit__sidebar--form my-2">
              <label
                className="collections__edit__sidebar--form--label"
                htmlFor="myfile"
              >
                Add Image
              </label>
              <input
                className="collections__edit__sidebar--form--input"
                type="file"
                id="myfile"
                name="myfile"
              />
            </form>
            <div className="collections__edit__sidebar--imgWrapper">
              <img
                className="collections__edit__sidebar--img"
                src={require("../../../assets/images/11.jpg")}
                alt="tv"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCollection;
