import fetchData from "./utils/fetchData";

const url = process.env.REACT_APP_SCHOOL_API_URL + "/user";

export const register = async (user, currentUser, dispatch) => {
  dispatch({ type: "START_LOADING" });

  const result = await fetchData(
    { url: url + "/register", body: user, token: currentUser.token },
    dispatch
  );
  if (result) {
    dispatch({ type: "UPDATE_USER", payload: result });
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "success",
        message: "Your account has been created successfully",
      },
    });
    dispatch({ type: "CLOSE_DIALOG" });
  }

  dispatch({ type: "END_LOADING" });
};

export const login = async (user, dispatch) => {
  dispatch({ type: "START_LOADING" });

  const result = await fetchData({ url: url + "/login", body: user }, dispatch);
  if (result) {
    dispatch({ type: "UPDATE_USER", payload: result });
    console.log(result);
  }

  dispatch({ type: "END_LOADING" });
};

export const updateProfile = async (currentUser, updatedFields, dispatch) => {
  dispatch({ type: "START_LOADING" });

  const { name, email } = updatedFields;
  let body = { name, email };
  try {
    const result = await fetchData(
      {
        url: url + "/updateProfile",
        method: "PATCH",
        body,
        token: currentUser?.token,
      },
      dispatch
    );
    if (result) {
      dispatch({ type: "UPDATE_USER", payload: { ...currentUser, ...result } });
      dispatch({
        type: "UPDATE_ALERT",
        payload: {
          open: true,
          severity: "success",
          message: "Your profile has been updated successfully",
        },
      });
      dispatch({
        type: "UPDATE_PROFILE",
        payload: { open: false },
      });
    }
  } catch (error) {
    dispatch({
      type: "UPDATE_ALERT",
      payload: {
        open: true,
        severity: "error",
        message: error.message,
      },
    });
    console.log(error);
  }

  dispatch({ type: "END_LOADING" });
};

export const getUsers = async (dispatch, currentUser) => {
  const result = await fetchData(
    { url, method: "GET", token: currentUser.token },
    dispatch
  );
  if (result) {
    dispatch({ type: "UPDATE_USERS", payload: result });
  }
};

export const logout = (dispatch) => {
  dispatch({ type: "UPDATE_USER", payload: null });
  // dispatch({ type: 'RESET_ROOM' });
  dispatch({ type: "UPDATE_USERS", payload: [] });
  dispatch({
    type: "UPDATE_ALERT",
    payload: { open: true, severity: "error", message: "Logged out!" },
  });
};
