import React, { useState, useContext } from "react";
import { ProductsContext } from "../../../store/ProductsContext";
import { useNavigate } from "react-router-dom";
import Form from "./VendorForm";
import swal from "sweetalert";
import axios from "../../axiosInstance";

const CreateVendor = () => {
  const { setLoading, unSetLoading } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [vendorName, setVendorName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigateToVendorView = () => {
    navigate("/vendors");
  };

  const onSubmitHandler = (vendorName, phone, address) => {
    const payload = {
      vendorName: vendorName,
      phoneNo: phone,
      address: address,
    };

    if (vendorName.length < 6 || phone.length < 10) {
      return;
    }
    setLoading();
    axios
      .post("/vendor", payload)
      .then((response) => {
        if (response.data.isSuccess && !response.data.isError) {
          unSetLoading();
          swal("Product created Successfully !", {
            icon: "success",
          }).then((value) => {
            navigateToVendorView();
          });
        }
      })
      .catch((err) => {
        unSetLoading();
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
          <Form
            onSubmitHandler={onSubmitHandler}
            vendorName={vendorName}
            setVendorName={setVendorName}
            phone={phone}
            setPhone={setPhone}
            address={address}
            setAddress={setAddress}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateVendor;
