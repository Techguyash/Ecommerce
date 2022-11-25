import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProductCtxProvider } from "./context/productContext";
import { AuthCtxtProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthCtxtProvider>
      <ProductCtxProvider>
        <App />
      </ProductCtxProvider>
    </AuthCtxtProvider>
  </React.StrictMode>
);
