import React from "react";

const Form = (props) => {
  return (
    <div className="products__create__main--addInfo card py-2 px-2 bg-white">
      <p className="mb-1">Title</p>
      <input
        type="text"
        placeholder="e.g. Short sleeve t-shirt"
        className="input"
        name="productName"
        value={props.productName}
        onChange={(e) => {
          props.setProductName(e.target.value);
        }}
      />
      {props.productName.length < 5 && (
        <p className="my-1 text-danger">
          Product name must contain 5 characters
        </p>
      )}

      <p className="my-1">Brand</p>
      <input
        type="text"
        placeholder="e.g. Adidas, Sony"
        className="input"
        name="brandName"
        value={props.brandNameInput}
        onChange={(e) => {
          props.setBrandNameInput(e.target.value);
        }}
      />
      {props.brandNameInput.length < 3 && (
        <p className="my-1 text-danger">Brand name must contain 3 characters</p>
      )}

      <p className="my-1">Description </p>
      <textarea
        cols="30"
        rows="10"
        name="description"
        className="textarea"
        value={props.descriptionInput}
        onChange={(e) => {
          props.setDescriptionInput(e.target.value);
        }}
      ></textarea>
      {props.descriptionInput.length < 15 && (
        <p className="my-1 text-danger">
          description must contain 15 characters
        </p>
      )}

      {/* <!-- featured --> */}
      <label className="checkbox-container mt-3">
        Make this product featured
        <input
          type="checkbox"
          checked={props.featuredProduct}
          onChange={() => props.setFeaturedProduct(!props.featuredProduct)}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Form;
