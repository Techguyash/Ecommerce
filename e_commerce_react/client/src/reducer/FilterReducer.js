const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS": {
      return {
        ...state,
        all_products: [...action.payload],
        filter_products: [...action.payload],
      };
    }

    case "SET_GRID_VIEW": {
      return {
        ...state,
        grid_view: true,
      };
    }
    case "SET_LIST_VIEW": {
      return {
        ...state,
        grid_view: false,
      };
    }
    case "GET_SORT_VALUE": {
      return {
        ...state,
        sorting_value: action.payload,
      };
    }

    case "SORTING_PRODUCTS": {
      let newSortData;
      const { filter_products, sorting_value } = state;
      let tempSortProduct = [...filter_products];

      const sortingProduct = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }

        if (sorting_value === "a-z") {
          return a.productName.localeCompare(b.productName);
        }
        if (sorting_value === "z-a") {
          return b.productName.localeCompare(a.productName);
        }
      };

      newSortData = tempSortProduct.sort(sortingProduct);
      return {
        ...state,
        filter_products: newSortData,
      };
    }

    case "UPDATE_FILTER_VALUE": {
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    }
    case "FILTER_PRODUCTS": {
      let { all_products } = state;
      let tempFilterProducts = [...all_products];
      const { text, category } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((currEle) => {
          return currEle.productName.toLowerCase().includes(text);
        });
      }

      if (category) {
        if (category !== "all") {
          tempFilterProducts = tempFilterProducts.filter((currEle) => {
            return currEle.category.name === category;
          });
        }
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };
    }

    default:
      return state;
  }
};

export default FilterReducer;
