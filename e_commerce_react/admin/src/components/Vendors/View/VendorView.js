import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emptyImg from "../../../assets/busy-marketing.svg";
import Pagination from "../../UI/Pagination";
import axios from "../../axiosInstance";
import Vendor from "./Vendor";

//Uncomment this to see the available product view

let availableProducts = [
  {
    id: "1",
    productName: "Super Extreme Nike Sports",
    type: "Shoes",
    count: "3",
    img: "2.jpg",
  },
  {
    id: "2",
    productName: "Super Extreme Nike Shirt",
    type: "Clothing",
    count: "2",
    img: "8.jpg",
  },
];

const EmptyVendors = () => {
  let navigate = useNavigate();
  const navigateVendorsAdd = () => {
    navigate("/vendors/create");
  };
  return (
    <div className="products__empty ">
      <h2 className="my-2">Vendors</h2>
      <hr />

      <div className="products__empty__content">
        <div className="products__empty__content--info my-auto">
          <h2 className="my-2">Add and manage your Vendors</h2>
          <p className="products__empty__content--info--description my-2">
            Get closer to your Supplies by adding or import your existing
            Vendors.
          </p>
          <button
            to="/products/create"
            className="products__empty__content--btn my-2 mr-1 btn btn-secondary"
            onClick={navigateVendorsAdd}
          >
            Add Vendor
          </button>
          <button className="products__empty__content--btn my-2 btn btn-light">
            Find Vendors
          </button>
        </div>
        <div className="products__empty__content--img my-auto">
          <img className="w-100" src={emptyImg} alt="busy" />
        </div>
      </div>
    </div>
  );
};

const AvailableVendors = () => {
  const [availableVendors, setAvailableVendors] = useState([
    {
      id: "1",
      VendorName: "Super Extreme Nike Sports",
      type: "Shoes",
      count: "3",
      img: "2.jpg",
    },
    {
      id: "2",
      VendorName: "Super Extreme Nike Shirt",
      type: "Clothing",
      count: "2",
      img: "8.jpg",
    },
  ]);

  let navigate = useNavigate();

  const navigateVendorAdd = () => {
    navigate("/vendors/create");
  };

  const navigateEditVendor = () => {
    navigate("/vendors/edit");
  };

  const deleteVendorHandler = (id) => {
    console.log("clicked");
    console.log(availableVendors);
    setAvailableVendors(
      availableVendors.filter((data) => {
        return data.id !== id;
      })
    );
    console.log(availableVendors);
  };

  return (
    <>
      <div className="products__list">
        <div className="products__titlebar dflex justify-content-between align-items-center mt-2">
          <div className="products__titlebar--item">
            <h1 className="my-1">Vendors</h1>
          </div>
          <div className="products__titlebar--item">
            <button
              className="btn btn-secondary ml-1"
              onClick={navigateVendorAdd}
            >
              Create Vendors
            </button>
          </div>
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
                  All Vendors
                </p>
              </li>
              <li>
                <p className="table--filter--link">Unpublish</p>
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
        <div className="table--heading mt-2 products__list__heading">
          <p className="table--heading--col1">image</p>
          <p className="table--heading--col2">Vendor</p>

          <p className="table--heading--col4">Type</p>
          <p className="table--heading--col3">Inventory</p>

          <p className="table--heading--col5">actions</p>
        </div>
        {availableVendors.map((data) => {
          return (
            <Vendor
              key={data.id}
              id={data.id}
              VendorName={data.VendorName}
              type={data.type}
              count={data.count}
              img={data.img}
              navigateHandler={navigateEditVendor}
              deleteHandler={deleteVendorHandler}
            />
          );
        })}

        {/* <!-- Paginate --> */}
        <Pagination />
        {/* <!-- End Paginate --> */}
      </div>
    </>
  );
};

const VendorsView = (props) => {
  const fetchVendorFromAPI = () => {
    axios
      .get("/vendor")
      .then((response) => {
        console.log(response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  fetchVendorFromAPI();

  return (
    <div className="products">
      {props.VendorList === null ? <EmptyVendors /> : <AvailableVendors />}
    </div>
  );
};

export default VendorsView;
