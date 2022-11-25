import { createContext } from "react";

const ProductContext = createContext();

const ProductCtxProvider = (props) => {
  return (
    <ProductContext.Provider value="dummy">
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductCtxProvider, ProductContext };
