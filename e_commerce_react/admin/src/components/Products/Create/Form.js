import React, { useRef, useState } from "react";

const Form = (props) => {
  const titleRef = useRef();
  const brandNameRef = useRef();
  const descriptionRef = useRef();
  const [featured, setFeatured] = useState(false);

  return (
    <div className="products__create__main--addInfo card py-2 px-2 bg-white">
      <p className="mb-1">Title</p>
      <input
        type="text"
        placeholder="e.g. Short sleeve t-shirt"
        className="input"
        name="productName"
        ref={titleRef}
        value={props.titleInput}
        onBlur={() => {
          props.formData.productName = titleRef.current.value;
          console.log(props.formData);
        }}
        onChange={(e) => {
          props.setTitleInput(e.target.value);
        }}
      />

      <p className="my-1">Brand</p>
      <input
        type="text"
        placeholder="e.g. Adidas, Sony"
        className="input"
        name="brandName"
        ref={brandNameRef}
        onBlur={() => {
          props.formData.brandName = brandNameRef.current.value;
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
        <input
          type="checkbox"
          checked={featured}
          onChange={() => setFeatured(!featured)}
        />
        <span className="checkmark"></span>
      </label>
    </div>
  );
};

export default Form;
