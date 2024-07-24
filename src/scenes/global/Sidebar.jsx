import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import SubjectIcon from "@mui/icons-material/Subject";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import TokenIcon from "@mui/icons-material/Token";
import QuizIcon from "@mui/icons-material/Quiz";
import GradeIcon from "@mui/icons-material/Grade";
import PaymentsIcon from "@mui/icons-material/Payments";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../dashboard";
import Team from "../team/index.jsx";
import Teachers from "../teachers";
import AddTeacher from "../teachers/AddTeacher";
import Parents from "../parent";
import AddParent from "../parent/AddParent";
import Students from "../students";
import AddStudent from "../students/AddStudent";
import Calendar from "../calendar";
import NoticeBoard from "../noticeboard";
import Class from "../class";
import Staffs from "../staffs";
import AddStaff from "../staffs/AddStaff";
import Subject from "../subject/index.jsx";
import ManageFees from "../fees/manageFees.jsx";
import ManageMarks from "../exam/ManageMarks.jsx";
import ExamList from "../exam/ExamList.jsx";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      component={<Link to={to} />}
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MySidebar = ({ open, setOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <>
      <Box
        mt={8}
        sx={{
          display: "flex",
          "& .ps-sidebar-container": {
            background: `${colors.primary[400]} !important`,
          },
          "& .ps-menu-button": {
            backgroundColor: "transparent !important",
          },
          "& .ps-menuitem": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .ps-menu-button:hover": {
            backgroundColor: "#868dfb !important",
          },
          "& .ps-active": {
            color: "#6870fa !important",
          },
          [`.${menuClasses.subMenuContent}`]: {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <Sidebar collapsed={open} transitionDuration={800}>
          <Menu iconShape="square">
            {/* {LOGO AND MENU ICON} */}

            {/* {MENU ITEMS} */}

            {/* {MENU ITEMS} */}
            <Box paddingLeft={open ? undefined : "10px"}>
              <Item
                title="Dashboard"
                to="dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />

              <Item
                title="Manage Team"
                to="team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <SubMenu label="Students" icon={<SchoolIcon />}>
                <Item
                  title="All Students"
                  to="students"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Admission Form"
                  to="addstudent"
                  icon={<PersonAddIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>

              <SubMenu label="Teachers" icon={<GroupIcon />}>
                <Item
                  title="All Teachers"
                  to="teachers"
                  icon={<ReceiptOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Add Teacher"
                  to="addteacher"
                  icon={<PersonAddIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>

              <SubMenu label="Class" icon={<Diversity2Icon />}>
                <Item
                  title="Manage Classes"
                  to="class"
                  icon={<ReceiptOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>
              <SubMenu label="Subject" icon={<LibraryBooksIcon />}>
                <Item
                  title="Manage Subjects"
                  to="subjects"
                  icon={<SubjectIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>

              <SubMenu label="Exam Section" icon={<TokenIcon />}>
                <Item
                  title="Exam Lists "
                  to="exams"
                  icon={<QuizIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
                <Item
                  title="Manage Marks"
                  to="managemarks"
                  icon={<GradeIcon />}
                  selected={selected}
                  setSelected={setSelected}
                />
              </SubMenu>

              <Item
                title="Payment and Invoice"
                to="fees"
                icon={<PaymentsIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Calendar"
                to="calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Notice"
                to="notice"
                icon={<HelpOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </Sidebar>
        <Routes>
          <Route path="" exact element={<Navigate to="dashboard" />} />

          <Route exact path="dashboard" element={<Dashboard />} />
          <Route exact path="team" element={<Team />} />
          <Route exact path="students" element={<Students />} />
          <Route exact path="teachers" element={<Teachers />} />
          <Route exact path="parents" element={<Parents />} />
          <Route exact path="staffs" element={<Staffs />} />
          <Route exact path="class" element={<Class />} />
          <Route exact path="calendar" element={<Calendar />} />
          <Route exact path="notice" element={<NoticeBoard />} />
          <Route exact path="addstudent" element={<AddStudent />} />
          <Route exact path="addparent" element={<AddParent />} />
          <Route exact path="addteacher" element={<AddTeacher />} />
          <Route exact path="addstaff" element={<AddStaff />} />
          <Route exact path="subjects" element={<Subject />} />
          <Route exact path="fees" element={<ManageFees />} />
          <Route exact path="managemarks" element={<ManageMarks />} />
          <Route exact path="exams" element={<ExamList />} />
        </Routes>
      </Box>
    </>
  );
};

export default MySidebar;
