import { useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducer/ProductReducer";
import axios from "../components/axiosInstance";
const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
  const getProducts = async () => {
    const res = await axios.get("/products");
    const products = await res.data.data;
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ name: "hai data" }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextProvider };
