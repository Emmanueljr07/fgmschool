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

              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/parents" element={<Parents />} />
              <Route path="/staffs" element={<Staffs />} />
              <Route path="/class" element={<Class />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/notice" element={<NoticeBoard />} />
              <Route path="/addstudent" element={<AddStudent />} />
              <Route path="/addparent" element={<AddParent />} />
              <Route path="/addteacher" element={<AddTeacher />} />
              <Route path="/addstaff" element={<AddStaff />} />
              {/* <Route path="/createclass" element={<CreateClass />} /> */}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AdminHomePage;
