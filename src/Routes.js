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
        <Route
          exact
          path="*"
          element={
            currentUser?.role === "admin" ||
            currentUser?.role === "editor" ||
            currentUser?.role === "viewer" ? (
              <Navigate to="admin/" />
            ) : currentUser?.role === "teacher" ? (
              <Navigate to="teacher/dashboard" />
            ) : (
              <LandingPage />
            )
          }
        />

        <Route
          exact
          path="admin/*"
          element={
            currentUser?.role === "admin" ||
            currentUser?.role === "editor" ||
            currentUser?.role === "viewer" ? (
              <AdminHomePage />
            ) : (
              <Navigate replace to="/" />
            )
          }
        />
        <Route
          exact
          path="teacher/dashboard/*"
          element={
            currentUser?.role === "teacher" ? (
              <TeacherDashboard />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          exact
          path="/login"
          element={currentUser === null ? <Login /> : <Navigate to="/" />}
        />
        <Route
          exact
          path="/teacherlogin"
          element={
            currentUser === null ? <TeacherLogin /> : <Navigate to="/" />
          }
        />
      </Routes>
    </>
  );
};

export default AllRoutes;
