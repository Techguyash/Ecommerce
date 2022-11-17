import React from "react";

const ImageContaine = (props) => {
  return (
    <div className="products__create__main--media--images mt-2">
      <ul className="products__create__main--media--images--list list-unstyled">
        <li className="products__create__main--media--images--item">
          <form
            className="products__create__main--media--images--item--form"
            {...props.dragProps}
          >
            <label className="products__create__main--media--images--item--form--label">
              Add Image
              <p className="my-1">Max {props.imgCount} pics</p>
            </label>
            <div
              onClick={props.onClick}
              className="products__create__main--media--images--item--form--input"
              id="myfile"
              name="myfile"
            />
          </form>
        </li>
      </ul>
    </div>
  );
};

export default ImageContaine;
