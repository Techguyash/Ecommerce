import { createContext, useReducer, useEffect } from "react";
import reducer from "../reducer/AuthReducer";
const AuthContext = createContext();

const initialState = {
  isLoggedIn: true,
  isLoading: false,
  isError: false,
  showLoginScreen: false,
  userData: {},
};

const AuthCtxtProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleShowLogin = () => {
    dispatch({
      type: "TOGGLE_SHOW_LOGIN_SCREEN",
    });
  };

  const getAuthAPI = (user) => {
    dispatch({ type: "SET_LOADING" });

    try {
      // TODO: This should call getAuthAPI with user and password
      dispatch({ type: "SET_API_DATA", payload: user });
    } catch (error) {
      dispatch({ type: "SET_API_ERROR", payload: error });
    }
  };

  useEffect(() => {
    getAuthAPI();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, toggleShowLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { AuthCtxtProvider, AuthContext };
