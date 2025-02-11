import { createContext, useReducer } from "react";
import AlertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(AlertReducer, initialState);

  //set alert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });
    setTimeout(() => dispatch({ type: "HIDE_ALERT" }), 2000);
  };

  return (
    <AlertContext.Provider value={{ setAlert, alert: state }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
