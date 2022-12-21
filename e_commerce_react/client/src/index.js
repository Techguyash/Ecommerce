import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductCtxProvider } from "./context/productContext";
import { AuthCtxtProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthCtxtProvider>
      <ProductCtxProvider>
        <App />
      </ProductCtxProvider>
    </AuthCtxtProvider>
  </BrowserRouter>
);
