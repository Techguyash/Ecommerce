import { useEffect, useReducer, createContext } from "react";
import reducer from "../reducer/ProductReducer";
import axios from "../components/axiosInstance";
import swal from "sweetalert";

const ProductsContext = createContext({
  isLoading: false,
  isError: false,
  products: [],
  singleProduct: {},
  unpublishedProducts: [],
  deleteProductHandler: () => {},
  getProductsById: () => {},
  setLoading: () => {},
  unSetLoading: () => {},
});

const ProductsContextProvider = ({ children }) => {
  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };
  const unSetLoading = () => {
    dispatch({ type: "SET_LOADING_FALSE" });
  };

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

  const getProductsById = async (id) => {
    try {
      const res = await axios.get(`/products/${id}`);
      const product = await res.data.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: product });
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

  const updateProductHandler = async (productPayload) => {
    console.log(productPayload);
    let response;
    swal({
      title: "Are you sure?",
      text: "You want to update this product?",
      icon: "warning",
      buttons: true,
      dangerMode: false,
    }).then(async (updateData) => {
      if (updateData) {
        dispatch({ type: "SET_LOADING" });
        try {
          response = await axios.put("/products/", productPayload);
          if (response.data.data) {
            getProducts();
          }
        } catch (err) {
          dispatch({ type: "API_ERROR" });
        }
      }
    });
    return response;
  };
  const INITIAL_STATE = {
    isLoading: true,
    isError: false,
    products: [],
    singleProduct: {},
    deleteProductHandler: deleteProductHandler,
    setLoading: setLoading,
    unSetLoading: unSetLoading,
    getProducts: getProducts,
    getProductsById: getProductsById,
    updateProductHandler: updateProductHandler,
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
