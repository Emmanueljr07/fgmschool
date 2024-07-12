const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_ADD_MEMBER":
      return {
        ...state,
        openAddMember: true,
      };
    case "CLOSE_ADD_MEMBER":
      return {
        ...state,
        openAddMember: false,
      };

    case "OPEN_CREATE_CLASS":
      return {
        ...state,
        openCreateClass: true,
      };
    case "CLOSE_CREATE_CLASS":
      return {
        ...state,
        openCreateClass: false,
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

    default:
      throw new Error("No matched action!");
  }
};

export default reducer;
