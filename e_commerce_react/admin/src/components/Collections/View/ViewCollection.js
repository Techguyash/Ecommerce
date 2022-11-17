import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../UI/Pagination";
import Collection from "./Collection";
import axios from "../../axiosInstance";
import { fetchCollectionAPI } from "../CollectionAPI";

const ViewCollection = () => {
  const [collectionData, setcollectionData] = useState([]);

  const fetchCollectionData = () => {
    axios
      .get("/category")
      .then((res) => {
        const response = res.data.data;
        console.log(response);
        setcollectionData(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCollectionData();
  }, []);

  const navigate = useNavigate();

  return (
    <div className="collections">
      <div className="collections__titlebar dflex justify-content-between align-items-center">
        <div className="collections__titlebar--item">
          {/* <div className="breadcramb mt-3">
            <i className="fas fa-angle-left mr-1"></i>Collections
          </div> */}
          <h1 className="my-1">Collections</h1>
        </div>
        <div
          className="collections__titlebar--item"
          onClick={(e) => {
            navigate("/collection/create");
          }}
        >
          <button className="btn btn-secondary ml-1">Create Collection</button>
        </div>
      </div>
      <div className="table card my-3">
        <div className="table--filter mb-2">
          <span className="table--filter--collapseBtn orders__table--filter--collapseBtn">
            <i className="fas fa-ellipsis-h"></i>
          </span>
          <div className="table--filter--listWrapper orders__table--filter--listWrapper">
            <ul className="table--filter--list list-unstyled dflex justify-content-start">
              <li>
                <p className="table--filter--link table--filter--link--active">
                  All Collections
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="table--search my-3">
          <div className="table--search--wrapper">
            <select className="table--search--select py-1 px-2" name="" id="">
              <option className="table--search--option" value="">
                Filter
              </option>
              <option className="table--search--option" value="">
                Collections A-Z
              </option>
              <option className="table--search--option" value="">
                Collections Z-A
              </option>
              <option className="table--search--option" value="">
                Most Viewed
              </option>
              <option className="table--search--option" value="">
                Less Viewed
              </option>
            </select>
            <span className="table--search--select--arrow">
              <i className="fas fa-caret-down"></i>
            </span>
          </div>
          <div className="relative">
            <i className="table--search--input--icon fas fa-search absolute"></i>
            <input
              className="table--search--input py-1 pl-4 pr-2"
              type="text"
              placeholder="Search orders"
            />
          </div>
        </div>
        <div className="table--heading collections__heading">
          {/* <p className="table--heading--col1">Image</p> */}
          <p className="table--heading--col2">Title</p>
          <p className="table--heading--col3 collections__heading--count">
            Total Products
          </p>
          <p className="table--heading--col4">Actions</p>
        </div>

        {collectionData.map((data) => {
          return (
            <Collection
              productName={data.name}
              count={data.totalProducts}
              img="10.jpg"
              key={data.id}
              id={data.id}
              description={data.description}
              fetchCollectionData={fetchCollectionData}
            />
          );
        })}

        {/* pagination */}
        <Pagination />
        {/* ends pagination */}
      </div>
    </div>
  );
};

export default ViewCollection;
