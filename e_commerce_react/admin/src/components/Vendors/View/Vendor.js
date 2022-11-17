import React from "react";

const Vendor = (props) => {
  return (
    <div className="table--items products__list__item">
      <div className="products__list__item--imgWrapper">
        <img
          className="products__list__item--img"
          src={require(`../../../assets/images/${props.img}`)}
          alt="product Image"
        />
      </div>
      <a className="table--items--col2">{props.VendorName}</a>

      <p className="table--items--col2">{props.type}</p>
      <p className="table--items--col3">{props.count}</p>
      <div>
        <button
          className="btn-icon btn-icon-success"
          onClick={props.navigateHandler}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button
          className="btn-icon btn-icon-danger"
          onClick={(e) => props.deleteHandler(props.id)}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Vendor;
