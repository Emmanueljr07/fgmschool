const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_DIALOG":
      return {
        ...state,
        openDialog: true,
      };
    case "CLOSE_DIALOG":
      return {
        ...state,
        openDialog: false,
      };

    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };
    case "END_LOADING":
      return {
        ...state,
        loading: false,
      };

    case "UPDATE_ALERT":
      return {
        ...state,
        alert: action.payload,
      };

    case "UPDATE_USER":
      localStorage.setItem("currentUser", JSON.stringify(action.payload));
      return {
        ...state,
        currentUser: action.payload,
      };

    case "VIEW_STUDENT":
      return {
        ...state,
        viewStudent: action.payload,
      };

    default:
      throw new Error("No matched action!");
  }
};

export default reducer;
