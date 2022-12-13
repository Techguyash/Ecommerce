import React, { useState } from "react";
import axios from "../../axiosInstance";

const Form = ({
  onSubmitHandler,
  vendorName,
  setVendorName,
  phone,
  setPhone,
  address,
  setAddress,
}) => {
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
        <p className="mb-1">
          Vendor Name <span className="text-danger">*</span>
        </p>
        <input
          type="text"
          placeholder="Eg : XYZ private limited"
          className="input"
          onChange={onVendorNameChange}
        />
        {vendorName.length < 6 && (
          <p className="mt-1 text-danger">
            Name should contain more than 5 characters
          </p>
        )}
        <p className="my-1">Phone no</p>
        <input
          type="number"
          placeholder="e.g. +91-87654321"
          className="input"
          onChange={onVendorPhoneChange}
        />
        {phone.length < 10 && (
          <p className="mt-1 text-danger">Enter valid phone number</p>
        )}

        <p className="my-1">Address </p>
        <textarea
          cols="30"
          rows="4"
          className="textarea"
          onChange={onVendorAdressChange}
        ></textarea>
      </div>
      <div className="dflex justify-content align-items-center my-3">
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
