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
    case "UPDATE_USER":
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      throw new Error("No matched action!");
  }
};

export default reducer;
