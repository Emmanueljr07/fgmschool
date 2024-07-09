import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import Login from "./Login";
import AdminHomePage from "./scenes/AdminHomePage";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route exact path="/login" element={<Login />} />
        {/* <Route path="/dashboard" element={<AdminHomePage />} /> */}
      </Routes>

      {/* <AdminHomePage /> */}
    </>
  );
};

export default AllRoutes;
