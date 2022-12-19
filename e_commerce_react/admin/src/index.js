import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ProductsContextProvider } from "./store/ProductsContext";
import { ProductFormCtxProvider } from "./store/ProductForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProductsContextProvider>
      <ProductFormCtxProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ProductFormCtxProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);
