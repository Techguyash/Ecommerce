import React, { useState } from "react";
import "./App.css";
import PageLayout from "./components/Layout/PageLayout";

import CreateCollection from "./components/Collections/Create/CreateCollection";
import Home from "./components/home/Home";
import Orders from "./components/orders/Orders";
import AbandonedCheckouts from "./components/orders/AbandonedCheckouts/AbandonedCheckouts";
import SingleOrder from "./components/SingleOrder/SingleOrder";
import FulFillment from "./components/Fullfillment/FullFillment";
import EditCollection from "./components/Collections/Edit/EditCollection";
import ViewCollection from "./components/Collections/View/ViewCollection";
import ProductsView from "./components/Products/View/ProductsView";
import CreateProduct from "./components/Products/Create/CreateProduct";
import EditVariant from "./components/Products/EditVariant/EditVariant";
import Customers from "./components/Customers/Customers";
import Vendor from "./components/Vendors/View/VendorView";
import CreateVendor from "./components/Vendors/Create/CreateVendor";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>

        <Route path="/orders" element={<Orders />}></Route>

        <Route
          path="/abandon-checkouts"
          element={<AbandonedCheckouts />}
        ></Route>

        <Route path="/single-order" element={<SingleOrder />}></Route>

        <Route path="/fulfillment" element={<FulFillment />}></Route>
        <Route
          path="/collection/create"
          exact
          element={<CreateCollection />}
        ></Route>
        <Route
          path="/collection/edit"
          exact
          element={<EditCollection />}
        ></Route>

        <Route
          path="/collection/view"
          exact
          element={<ViewCollection />}
        ></Route>
        <Route path="/vendors" exact element={<Vendor />}></Route>
        <Route path="/vendors/create" exact element={<CreateVendor />}></Route>
        <Route path="/products/view" exact element={<ProductsView />}></Route>

        <Route
          path="/products/create"
          exact
          element={<CreateProduct />}
        ></Route>

        <Route
          path="/products/edit/:id"
          exact
          element={<EditVariant />}
        ></Route>

        <Route path="/customer" element={<Customers />}></Route>
        {/* <Route path="*" element={<Home />}></Route> */}
      </Routes>
    </PageLayout>
  );
}

export default App;
