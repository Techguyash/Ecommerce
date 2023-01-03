import { createContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";
import axios from "../AxiosInstance";
const ProductContext = createContext({
  isLoading: false,
  isError: false,
  products: [],
  featuredProducts: [],
  singleProduct: {},
  isSingleProductLoading: false,
  deleteProductHandler: () => {},
  getProductsById: () => {},
  setLoading: () => {},
  unSetLoading: () => {},
  Allcategories: [],
  getCategory: () => {},
});

const ProductCtxProvider = (props) => {
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

  const getCategory = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get("/category");
      const categories = await res.data.data;
      dispatch({ type: "SET_API_CATEGORY", payload: categories });
    } catch (e) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getProductsById = async (id) => {
    dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" });
    try {
      const res = await axios.get(`/products/${id}`);
      const product = await res.data.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: product });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const INITIAL_STATE = {
    isLoading: true,
    isError: false,
    products: [],
    featuredProducts: [],
    singleProduct: {},
    isSingleProductLoading: false,
    getProductsById: getProductsById,
    Allcategories: [],
    getCategory: getCategory,
  };

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    getProducts();
    getCategory();
  }, []);

  return (
    <ProductContext.Provider value={state}>
      {props.children}
    </ProductContext.Provider>
  );
};

export { ProductCtxProvider, ProductContext };
