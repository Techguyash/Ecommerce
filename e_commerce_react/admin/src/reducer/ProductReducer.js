const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_LOADING_FALSE":
      return {
        ...state,
        isLoading: false,
      };

    case "SET_API_DATA":
      return {
        ...state,
        isLoading: false,
        isError: false,
        unpublishedProducts: action.payload.filter((data) => {
          return !data.published;
        }),
        products: action.payload,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isLoading: false,
        isError: false,
        singleProduct: action.payload,
      };

    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default ProductReducer;
