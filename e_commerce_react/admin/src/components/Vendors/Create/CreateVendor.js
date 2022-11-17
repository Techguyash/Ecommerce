import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./VendorForm";
import swal from "sweetalert";
import axios from "../../axiosInstance";

const CreateVendor = () => {
  const navigate = useNavigate();

  const navigateToVendorView = () => {
    navigate("/vendors");
  };

  const onSubmitHandler = (vendorName, phone, address) => {
    const payload = {
      vendorName: vendorName,
      phoneNo: phone,
      address: address,
    };

    axios
      .post("/vendor/", payload)
      .then((response) => {
        if (response.data.isSuccess && !response.data.isError) {
          swal("Product created Successfully !", {
            icon: "success",
          }).then((value) => {
            navigateToVendorView();
          });
        }
      })
      .catch((err) => {
        swal("Failed, Please try after sometime", {
          icon: "error",
        });
      });
  };

  return (
    <div className="products__create">
      <div className="products__create__titlebar dflex justify-content-between align-items-center">
        <div className="products__create__titlebar--item">
          <div className="breadcramb mt-3" onClick={navigateToVendorView}>
            <i className="fas fa-angle-left mr-1"></i>Vendors
          </div>
          <h1 className="my-1">Add Vendor</h1>
        </div>
        <div className="products__create__titlebar--item">
          <button className="btn btn-light" onClick={navigateToVendorView}>
            Discard
          </button>
          <button className="btn btn-secondary ml-1">Save</button>
        </div>
      </div>
      <div className="products__create__cardWrapper mt-2">
        <div className="products__create__main">
          <Form onSubmitHandler={onSubmitHandler} />
        </div>
      </div>
    </div>
  );
};

export default CreateVendor;
