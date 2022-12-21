const ProductReducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleProductLoading: true,
      };

    case "SET_API_DATA":
      return {
        ...state,
        isLoading: false,
        featuredProducts: action.payload.filter((data) => {
          return data.featuredProduct === true;
        }),
        products: action.payload,
      };
    case "SET_API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        singleProduct: action.payload,
        isSingleProductLoading: false,
      };
    default:
      return state;
  }
};

export default ProductReducer;
