import React from "react";
import CheckoutItem from "./CheckoutItem";

const checkOutItemsData = [
  {
    orderId: "093234",
    date: "Jan 18, 9:31 am",
    customerName: "Jonathan yu",
    emailSent: false,
    recoveryStatus: false,
    totalPrice: "7,301",
  },
  {
    orderId: "078651",
    date: "Jul 13, 10:33 pm",
    customerName: "Iron man",
    emailSent: true,
    recoveryStatus: false,
    totalPrice: "401",
  },
  {
    orderId: "087543",
    date: "Dec 07, 12:08 am",
    customerName: "Captain America",
    emailSent: true,
    recoveryStatus: true,
    totalPrice: "67,031",
  },
  {
    orderId: "078651",
    date: "Jul 13, 10:33 pm",
    customerName: "Iron man",
    emailSent: false,
    recoveryStatus: true,
    totalPrice: "401",
  },
];

const AbandonedCheckouts = () => {
  return (
    <div class="abandoned">
      <h2 class="my-3">Abandoned Checkouts</h2>
      <div class="table card my-3">
        <div class="table--filter mb-2">
          <span class="table--filter--collapseBtn abandoned__table--filter--collapseBtn">
            <i class="fas fa-ellipsis-h"></i>
          </span>
          <div class="table--filter--listWrapper abandoned__table--filter--listWrapper">
            <ul class="table--filter--list list-unstyled dflex justify-content-start">
              <li>
                <p class="table--filter--link table--filter--link--active">
                  All Checkouts
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div class="table--search my-3">
          <div class="table--search--wrapper">
            <select class="table--search--select py-1 px-2" name="" id="">
              <option value="">Filter</option>
              <option value="">This Month</option>
              <option value="">Last Month</option>
              <option value="">Last 3 Months</option>
              <option value="">This Year</option>
              <option value="">Last Year</option>
            </select>
            <span class="table--search--select--arrow">
              <i class="fas fa-caret-down"></i>
            </span>
          </div>
          <div class="relative">
            <i class="table--search--input--icon fas fa-search absolute"></i>
            <input
              class="table--search--input py-1 pl-4 pr-2"
              type="text"
              placeholder="Start typing to search for checkouts..."
            />
          </div>
        </div>
        <div class="table--heading abandoned__heading mt-2">
          <p class="table--heading--col1">Checkout</p>
          <p class="table--heading--col2">Date</p>
          <p class="table--heading--col3">Customer</p>
          <p class="table--heading--col4">Email Sent</p>
          <p class="table--heading--col5">Recovery</p>
          <p class="table--heading--col7">Total</p>
        </div>
        {checkOutItemsData.map((data) => {
          return (
            <CheckoutItem
              orderId={data.orderId}
              date={data.date}
              customerName={data.customerName}
              emailSent={data.emailSent}
              recoveryStatus={data.recoveryStatus}
              totalPrice={data.totalPrice}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AbandonedCheckouts;
