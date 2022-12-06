import React, { useContext } from "react";
import swal from "sweetalert";
import axios from "../../axiosInstance";
import { fetchProducts } from "../ProductsAPI";
import { ProductsContext } from "../../../store/ProductsContext";

import { useNavigate } from "react-router-dom";

const Product = ({ data }) => {
  const imageUrl = data.imageUrl[0].imageUrl;
  const context = useContext(ProductsContext);
  const { deleteProductHandler } = context;

  let navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/products/edit/${data.productId}`, {
      state: {},
    });
  };

  return (
    <div className="table--items products__list__item">
      <div className="products__list__item--imgWrapper">
        <img
          className="products__list__item--img"
          src={imageUrl}
          alt="product Image"
        />
      </div>
      <a className="table--items--col2">{data.productName}</a>

      <p className="table--items--col2">{data.category.name}</p>
      <p className="table--items--col3">{data.stock}</p>
      <div>
        <button className="btn-icon btn-icon-success" onClick={navigateHandler}>
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button
          className="btn-icon btn-icon-danger"
          onClick={() => {
            deleteProductHandler(data.productId);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
