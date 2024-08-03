import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import AdminHomePage from "./scenes/AdminHomePage";
import TeacherDashboard from "./teacherScenes/dashboard/TeacherDashboard";
import TeacherLogin from "./Components/TeacherLogin/TeacherLogin.jsx";
import { useValue } from "./context/ContextProvider.js";

const AllRoutes = () => {
  const {
    state: { currentUser },
  } = useValue();

  return (
    <>
      <Routes>
        <Route exact path="*" element={<LandingPage />} />

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
