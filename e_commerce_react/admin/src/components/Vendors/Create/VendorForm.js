import React, { useState } from "react";
import axios from "../../axiosInstance";

const Form = ({ onSubmitHandler }) => {
  const [vendorName, setVendorName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const onVendorNameChange = (e) => {
    setVendorName(e.target.value);
  };
  const onVendorPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const onVendorAdressChange = (e) => {
    setAddress(e.target.value);
  };

  return (
    <>
      <div className="products__create__main--addInfo card py-2 px-2 bg-white">
        <p className="mb-1">Vendor Name</p>
        <input
          type="text"
          placeholder="e.g. Short sleeve t-shirt"
          className="input"
          onChange={onVendorNameChange}
        />

        <p className="my-1">Phone no</p>
        <input
          type="text"
          placeholder="e.g. +91-87654321"
          className="input"
          onChange={onVendorPhoneChange}
        />

        <p className="my-1">Address (optional)</p>
        <textarea
          cols="30"
          rows="4"
          className="textarea"
          onChange={onVendorAdressChange}
        ></textarea>
      </div>
      <div className="dflex justify-content align-items-center my-3">
        <button className="btn btn-danger mx-2">Delete</button>
        <button
          className="btn btn-secondary"
          onClick={() => {
            onSubmitHandler(vendorName, phone, address);
          }}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Form;
