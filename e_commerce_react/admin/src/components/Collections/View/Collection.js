import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteAPI } from "../CollectionAPI";
const Collection = ({
  productName,
  img,
  id,
  count,
  description,
  fetchCollectionData,
}) => {
  let navigate = useNavigate();

  const navigateToEditHandler = () => {
    navigate("/collection/edit", {
      state: {
        productName: productName,
        img: img,
        id: id,
        count: count,
        description: description,
      },
    });
  };

  return (
    <div className="table--items collections__items">
      <p className="table--items--col2">{productName}</p>
      <p className="table--items--col3">{count}</p>
      <div>
        <button
          className="btn-icon btn-icon-success"
          onClick={navigateToEditHandler}
        >
          <i className="fas fa-pencil-alt"></i>
        </button>
        <button
          className="btn-icon btn-icon-danger"
          onClick={() => {
            deleteAPI(id, fetchCollectionData);
          }}
        >
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
};

export default Collection;
