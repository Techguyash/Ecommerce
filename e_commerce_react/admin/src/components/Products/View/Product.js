import React, { useEffect } from "react";
import swal from "sweetalert";
import axios from "../../axiosInstance";
import { fetchProducts } from "../ProductsAPI";

import { useNavigate } from "react-router-dom";

const Product = ({ data, img, setAvailableProducts }) => {
  let navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/products/edit/${data.productId}`, {
      state: {},
    });
  };

  function deleteProductHandler(id) {
    swal({
      title: "Are you sure?",
      text: "You want to delete this product?",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    }).then(async (updateData) => {
      if (updateData) {
        await axiosDelete(id);
        fetchProducts(setAvailableProducts);
      }
    });
  }

  async function axiosDelete(id) {
    await axios
      .delete("/products/" + id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="table--items products__list__item">
      <div className="products__list__item--imgWrapper">
        <img
          className="products__list__item--img"
          // src={require(`../../../assets/images/${img}`)}
          src={data.imgUrl}
          alt="product Image"
        />
      </div>
      <a className="table--items--col2">{data.title}</a>

      <p className="table--items--col2">{data.category.name}</p>
      <p className="table--items--col3">{data.inventory}</p>
      <div>
        <button className="btn-icon btn-icon-success" onClick={navigateHandler}>
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button
          className="btn-icon btn-icon-danger"
          onClick={async (e) => {
            await deleteProductHandler(data.productId);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Product;
