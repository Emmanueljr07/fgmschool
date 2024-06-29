import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import MySidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Teachers from "./scenes/teachers";
import Students from "./scenes/students";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import NoticeBoard from "./scenes/noticeboard";
import Class from "./scenes/class";
import Staffs from "./scenes/staffs";
import AddForm from "./Components/AddForm";

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
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/staffs" element={<Staffs />} />
              <Route path="/class" element={<Class />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/notice" element={<NoticeBoard />} />
              <Route path="/addform" element={<AddForm title="Student" />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
