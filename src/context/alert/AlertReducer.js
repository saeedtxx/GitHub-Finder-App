const AlertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return { ...state, ...action.payload };

    case "HIDE_ALERT":
      return {
        state: null,
      };

    default:
      return state;
  }
};

export default AlertReducer;
