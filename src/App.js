import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import MySidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Teachers from "./scenes/teachers";
import AddTeacher from "./scenes/teachers/AddTeacher";
import Parents from "./scenes/parent";
import AddParent from "./scenes/parent/AddParent";
import Students from "./scenes/students";
import AddStudent from "./scenes/students/AddStudent";
import Calendar from "./scenes/calendar";
import NoticeBoard from "./scenes/noticeboard";
import Class from "./scenes/class";
import Staffs from "./scenes/staffs";
import AddStaff from "./scenes/staffs/AddStaff";
// import Home from "./scenes/home/home";

function App() {
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
              {/* <Route path="/" element={<Home />} /> */}
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
}

export default App;
