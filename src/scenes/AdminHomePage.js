import { ColorModeContext, useMode } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";

import Topbar from "./global/Topbar.jsx";
import MySidebar from "./global/Sidebar";
import Dashboard from "./dashboard";
import Team from "./team/index.jsx";
import Teachers from "./teachers";
import AddTeacher from "./teachers/AddTeacher";
import Parents from "./parent";
import AddParent from "./parent/AddParent";
import Students from "./students";
import AddStudent from "./students/AddStudent";
import Calendar from "./calendar";
import NoticeBoard from "./noticeboard";
import Class from "./class";
import Staffs from "./staffs";
import AddStaff from "./staffs/AddStaff";
import Subject from "./subject/index.jsx";
import ManageFees from "./fees/manageFees.jsx";
import ManageMarks from "./exam/ManageMarks.jsx";

const AdminHomePage = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <MySidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" exact element={<Navigate to="/dashboard" />} />

              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/team" element={<Team />} />
              <Route exact path="/students" element={<Students />} />
              <Route exact path="/teachers" element={<Teachers />} />
              <Route exact path="/parents" element={<Parents />} />
              <Route exact path="/staffs" element={<Staffs />} />
              <Route exact path="/class" element={<Class />} />
              <Route exact path="/calendar" element={<Calendar />} />
              <Route exact path="/notice" element={<NoticeBoard />} />
              <Route exact path="/addstudent" element={<AddStudent />} />
              <Route exact path="/addparent" element={<AddParent />} />
              <Route exact path="/addteacher" element={<AddTeacher />} />
              <Route exact path="/addstaff" element={<AddStaff />} />
              <Route exact path="/subjects" element={<Subject />} />
              <Route exact path="/fees" element={<ManageFees />} />
              <Route exact path="/managemarks" element={<ManageMarks />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AdminHomePage;
