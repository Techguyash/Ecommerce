const AuthReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_SHOW_LOGIN_SCREEN":
      return {
        ...state,
        showLoginScreen: !state.showLoginScreen,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      return {
        ...state,
        isLoading: false,
        userData: action.payload,
      };
    case "SET_API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default AuthReducer;
