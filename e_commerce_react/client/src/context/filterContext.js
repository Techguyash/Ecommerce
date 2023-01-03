import { useContext, createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/FilterReducer";
import { ProductContext } from "../context/productContext";

export const FilterContext = createContext({
  filter_products: [],
  all_products: [],
  grid_view: true,
  setGridView: () => {},
  setListView: () => {},
  sorting_value: "lowest",
  sorting: () => {},
  filters: {},
  updateFilterValue: () => {},
});

export const FilterCtxProvider = ({ children }) => {
  const { products } = useContext(ProductContext);

  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  const sorting = (event) => {
    let userVal = event.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: userVal });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };

  const initialState = {
    filter_products: [],
    all_products: [],
    grid_view: true,
    setGridView: setGridView,
    setListView: setListView,
    sorting_value: "lowest",
    sorting: sorting,
    filters: {
      text: "",
      category: "all",
      brand: "all",
    },
    updateFilterValue: updateFilterValue,
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state }}>
      {children}
    </FilterContext.Provider>
  );
};
