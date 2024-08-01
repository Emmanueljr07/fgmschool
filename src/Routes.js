import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import AdminHomePage from "./scenes/AdminHomePage";
import TeacherDashboard from "./teacherScenes/dashboard/TeacherDashboard";
import TeacherLogin from "./Components/TeacherLogin/TeacherLogin.jsx";
import { useValue } from "./context/ContextProvider.js";
import { useNavigate } from "react-router";

const AllRoutes = () => {
  const navigate = useNavigate();
  const {
    state: { currentUser },
  } = useValue();

  useEffect(() => {
    if (currentUser?.role === "admin" || "editor" || "viewer") {
      navigate("admin/dashboard");
    } else if (currentUser?.role === "teacher") {
      navigate("teacher/dashboard");
    } else if (currentUser === null) {
      navigate("/");
    } else {
      navigate("/");
    }
  });

  return (
    <>
      <Routes>
        <Route exact path="*" Component={LandingPage} />

        <Route exact path="admin/*" element={<AdminHomePage />} />
        <Route
          exact
          path="teacher/dashboard/*"
          element={<TeacherDashboard />}
        />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/teacherlogin" element={<TeacherLogin />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
