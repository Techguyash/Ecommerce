import { useEffect, useReducer, createContext } from "react";
import reducer from "../reducer/ProductReducer";
import axios from "../components/axiosInstance";
import swal from "sweetalert";

const ProductsContext = createContext({
  isLoading: false,
  isError: false,
  products: [],
  deleteProductHandler: () => {},
});

const ProductsContextProvider = ({ children }) => {
  const getProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get("/products");
      const products = await res.data.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const deleteProductHandler = async (id) => {
    swal({
      title: "Are you sure?",
      text: "You want to delete this product?",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    }).then(async (updateData) => {
      if (updateData) {
        dispatch({ type: "SET_LOADING" });
        try {
          const res = await axios.delete("/products/" + id);
          if (res.data.data) {
            getProducts();
          }
        } catch (error) {
          dispatch({ type: "API_ERROR" });
        }
      }
    });
  };

  const INITIAL_STATE = {
    isLoading: true,
    isError: false,
    products: [],
    deleteProductHandler: deleteProductHandler,
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductsContext.Provider value={{ ...state }}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsContext, ProductsContextProvider };
