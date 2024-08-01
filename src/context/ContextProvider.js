import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { jwtDecode } from "jwt-decode";

const initialState = {
  currentUser: null,
  openAddMember: false,
  openDialog: false,
  loading: false,
  alert: { open: false, severity: "info", message: "" },
  viewStudent: null,
  users: [],
  students: [],
  teachers: [],
  classes: [],
  subjects: [],
  profile: { open: false },
  // studentsInClass: [],
  // studentsInSubject: [],
};

const Context = createContext(initialState);

export const useValue = () => {
  return useContext(Context);
};

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      const token = currentUser.token;
      const decodedToken = jwtDecode(token);
      console.log(decodedToken.exp, "token expired");
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        dispatch({ type: "UPDATE_USER", payload: null });
        console.log(decodedToken.exp, "token expired");
        localStorage.removeItem("currentUser");
      } else {
        console.log(decodedToken.exp, "token expired");
        dispatch({ type: "UPDATE_USER", payload: currentUser });
      }
    }
  }, []);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default ContextProvider;
