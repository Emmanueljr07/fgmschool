const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    default:
      throw new Error("No matched action!");
  }
};

export default reducer;
