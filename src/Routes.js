import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
// import Login from "./Login";
import AdminHomePage from "./scenes/AdminHomePage";
import TeacherDashboard from "./teacherScenes/dashboard/TeacherDashboard";

const AllRoutes = () => {
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
        {/* <Route exact path="/login" element={<Login />} /> */}
      </Routes>
    </>
  );
};

export default AllRoutes;
