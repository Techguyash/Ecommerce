import React, { useState } from "react";

const Form = ({ title1, description1, product }) => {
  const [title, setTitle] = useState(title1 + " ");
  const [description, setDescription] = useState(description1 + " ");
  console.log(title1, description1);

  return (
    <div className="products__create__main--addInfo card py-2 px-2 bg-white">
      <p className="mb-1">Title</p>

      <input
        type="text"
        placeholder="e.g. Short sleeve t-shirt"
        className="input"
        name="productName"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onBlur={() => {
          product.title = title;
          console.log(product);
        }}
      />

      <p className="my-1">Description (optional)</p>
      <textarea
        cols="30"
        rows="10"
        name="description"
        className="textarea"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        onBlur={() => {
          product.description = description;
          console.log(product);
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
