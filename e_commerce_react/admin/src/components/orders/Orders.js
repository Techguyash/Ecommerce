import React from "react";
import "./styles.css";
import "../genericStyles.css";
import Pagination from "../UI/Pagination";
import OrderItem from "./OrderItem";

const orderData = [
  {
    orderId: "#093654",
    date: "Jan 18, 9:31am",
    customer: "Jonathan Yu",
    paymentStatus: "abandoned",
    fulfillment: "completed",
    total: "8377",
  },
  {
    orderId: "#093654",
    date: "Jan 18, 9:31am",
    customer: "Tony stark",
    paymentStatus: "pending",
    fulfillment: "shipped",
    total: "4577",
  },
  {
    orderId: "#093654",
    date: "Jan 18, 9:31am",
    customer: "Steve rogers",
    paymentStatus: "paid",
    fulfillment: "processed",
    total: "82377",
  },
  {
    orderId: "#093654",
    date: "Jan 18, 9:31am",
    customer: "Hulk",
    paymentStatus: "abandoned",
    fulfillment: "shipped",
    total: "77",
  },
];

const Orders = () => {
  return (
    <React.Fragment>
      <div className="orders ">
        <h2 className="my-3">Orders</h2>
        <div className="table card my-3">
          <div className="table--filter mb-2">
            <span className="table--filter--collapseBtn orders__table--filter--collapseBtn">
              <i className="fas fa-ellipsis-h"></i>
            </span>
            <div className="table--filter--listWrapper orders__table--filter--listWrapper">
              <ul className="table--filter--list list-unstyled dflex justify-content-start">
                <li>
                  <p className="table--filter--link table--filter--link--active">
                    All
                  </p>
                </li>
                <li>
                  <p className="table--filter--link">Paid</p>
                </li>
                <li>
                  <p className="table--filter--link">Unpaid</p>
                </li>
                <li>
                  <p className="table--filter--link">Pending</p>
                </li>
                <li>
                  <p className="table--filter--link">Not Processed</p>
                </li>
                <li>
                  <p className="table--filter--link">Shipped</p>
                </li>
                <li>
                  <p className="table--filter--link">Completed</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="table--search my-3">
            <div className="table--search--wrapper">
              <select className="table--search--select py-1 px-2" name="" id="">
                <option value="">Filter</option>
                <option value="">This Month</option>
                <option value="">Last Month</option>
                <option value="">Last 3 Months</option>
                <option value="">This Year</option>
                <option value="">Last Year</option>
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

          <div className="table--heading mt-2">
            <p className="table--heading--col1">Order</p>
            <p className="table--heading--col2">Date</p>
            <p className="table--heading--col3">Customer</p>
            <p className="table--heading--col4">Payment</p>
            <p className="table--heading--col5">Fulfillment</p>
            <p className="table--heading--col6">
              <i className="fas fa-toggle-on"></i>
            </p>
            <p className="table--heading--col7">Total</p>
          </div>
          {orderData.map((data) => {
            return (
              <OrderItem
                orderId={data.orderId}
                date={data.date}
                customer={data.customer}
                paymentStatus={data.paymentStatus}
                fulfillment={data.fulfillment}
                total={data.total}
              />
            );
          })}

          {/* pagination */}
          <Pagination />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Orders;
