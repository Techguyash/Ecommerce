import React, { useRef, useState } from "react";

const Form = (props) => {
  const titleRef = useRef();
  const descriptionRef = useRef();

  return (
    <div className="products__create__main--addInfo card py-2 px-2 bg-white">
      <p className="mb-1">Title</p>
      <input
        type="text"
        placeholder="e.g. Short sleeve t-shirt"
        className="input"
        name="productName"
        ref={titleRef}
        onBlur={() => {
          props.formData.title = titleRef.current.value;
          console.log(props.formData);
        }}
      />

      <p className="my-1">Brand</p>
      <input
        type="text"
        placeholder="e.g. Adidas, Sony"
        className="input"
        name="productName"
        ref={titleRef}
        onBlur={() => {
          props.formData.title = titleRef.current.value;
          console.log(props.formData);
        }}
      />

      <p className="my-1">Description (optional)</p>
      <textarea
        cols="30"
        rows="10"
        name="description"
        ref={descriptionRef}
        className="textarea"
        onBlur={() => {
          props.formData.description = descriptionRef.current.value;
          console.log(props.formData);
        }}
      ></textarea>

      {/* <!-- featured --> */}
      <label className="checkbox-container mt-3">
        Make this product featured
        <input type="checkbox" />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Form;
