import React from "react";
import Pagination from "../UI/Pagination";
import CustomerIRowtem from "./CustomerIRowtem";

const customerData = [
  {
    name: "Zack snyder",
    totalOrder: "34",
    address: "General Santos City, Philippines",
    totalPurchased: "1,23,453",
  },
  {
    name: "Black Panther",
    totalOrder: "1",
    address: "los angles, Wakanda",
    totalPurchased: "1,345",
  },
];

const Customers = () => {
  return (
    <div className="customers">
      <div className="customers__titlebar dflex justify-content-between align-items-center">
        <div className="customers__titlebar--item">
          <div className="breadcramb mt-3">
            <i className="fas fa-angle-left mr-1"></i>Customers
          </div>
          <h1 className="my-1">Customers</h1>
        </div>
        <div className="customers__titlebar--item">
          <button className="btn btn-secondary ml-1">Add Customer</button>
        </div>
      </div>
      {/* <!--   px-3 py-2 --> */}
      <div className="table card my-3">
        <div className="table--filter mb-2">
          <span className="table--filter--collapseBtn">
            <i className="fas fa-ellipsis-h"></i>
          </span>
          <div className="table--filter--listWrapper">
            <ul className="table--filter--list list-unstyled dflex justify-content-start">
              <li>
                <p className="table--filter--link table--filter--link--active">
                  All
                </p>
              </li>
              <li>
                <p className="table--filter--link">New</p>
              </li>
              <li>
                <p className="table--filter--link">Email Subscriber</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="table--search my-3">
          <div className="table--search--wrapper">
            <select className="table--search--select py-1 px-2" name="" id="">
              <option className="table--search--option" value="">
                Email Subscription
              </option>
              <option className="table--search--option" value="">
                Subscribed
              </option>
              <option className="table--search--option" value="">
                Pending Confirmation
              </option>
              <option className="table--search--option" value="">
                Not Subscribed
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

        <div className="table--heading customers__heading">
          <p className="table--heading--col1">Name</p>
          <p className="table--heading--col2">Orders</p>
          <p className="table--heading--col3">Spent</p>
        </div>
        {customerData.map((data) => {
          return (
            <CustomerIRowtem
              name={data.name}
              totalOrder={data.totalOrder}
              totalPurchased={data.totalPurchased}
              address={data.address}
            />
          );
        })}

        {/* <!-- Paginate --> */}
        <Pagination />
        {/* <!-- End Paginate --> */}
      </div>
    </div>
  );
};

export default Customers;
