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
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
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

const Item = ({ title, to, icon, selected, setSelected, selectedLink }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      component={<Link to={to} />}
      active={selectedLink === to}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(to)}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MySidebar = ({ open, setOpen }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const [selectedLink, setSelectedLink] = useState("");

  return (
    <>
      <Box
        mt={6}
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
            <Box pt={2} paddingLeft={open ? undefined : "10px"}>
              <Item
                title="Dashboard"
                to="dashboard"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                selectedLink={selectedLink}
              />

              <Item
                title="Manage Team"
                to="team"
                icon={<PeopleOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                selectedLink={selectedLink}
              />
              <SubMenu
                active={
                  selectedLink === "students" || selectedLink === "addstudent"
                }
                label="Students"
                icon={<SchoolIcon />}
              >
                <Item
                  title="All Students"
                  to="students"
                  icon={<ContactsOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  selectedLink={selectedLink}
                />
                <Item
                  title="Admission Form"
                  to="addstudent"
                  icon={<PersonAddIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  selectedLink={selectedLink}
                />
              </SubMenu>

              <SubMenu
                active={
                  selectedLink === "teachers" || selectedLink === "addteacher"
                }
                label="Teachers"
                icon={<GroupIcon />}
              >
                <Item
                  title="All Teachers"
                  to="teachers"
                  icon={<ReceiptOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  selectedLink={selectedLink}
                />
                <Item
                  title="Add Teacher"
                  to="addteacher"
                  icon={<PersonAddIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  selectedLink={selectedLink}
                />
              </SubMenu>

              <SubMenu
                active={selectedLink === "class"}
                label="Class"
                icon={<Diversity2Icon />}
              >
                <Item
                  title="Manage Classes"
                  to="class"
                  icon={<ReceiptOutlinedIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  selectedLink={selectedLink}
                />
              </SubMenu>
              <SubMenu
                active={selectedLink === "subjects"}
                label="Subject"
                icon={<LibraryBooksIcon />}
              >
                <Item
                  title="Manage Subjects"
                  to="subjects"
                  icon={<SubjectIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  selectedLink={selectedLink}
                />
              </SubMenu>

              <SubMenu
                active={
                  selectedLink === "exams" || selectedLink === "managemarks"
                }
                label="Exam Section"
                icon={<TokenIcon />}
              >
                <Item
                  title="Exam Lists "
                  to="exams"
                  icon={<QuizIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  selectedLink={selectedLink}
                />
                <Item
                  title="Manage Marks"
                  to="managemarks"
                  icon={<GradeIcon />}
                  selected={selected}
                  setSelected={setSelected}
                  selectedLink={selectedLink}
                />
              </SubMenu>

              <Item
                title="Payment and Invoice"
                to="fees"
                icon={<PaymentsIcon />}
                selected={selected}
                setSelected={setSelected}
                selectedLink={selectedLink}
              />
              <Item
                title="Calendar"
                to="calendar"
                icon={<CalendarTodayOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                selectedLink={selectedLink}
              />
              <Item
                title="Notice"
                to="notice"
                icon={<HelpOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
                selectedLink={selectedLink}
              />
            </Box>
          </Menu>
        </Sidebar>
        <Routes>
          <Route path="" exact element={<Navigate to="dashboard" />} />

          <Route
            exact
            path="dashboard"
            element={<Dashboard {...{ setSelectedLink, link: "dashboard" }} />}
          />
          <Route
            exact
            path="team"
            element={<Team {...{ setSelectedLink, link: "team" }} />}
          />
          <Route
            exact
            path="students"
            element={<Students {...{ setSelectedLink, link: "students" }} />}
          />
          <Route
            exact
            path="teachers"
            element={<Teachers {...{ setSelectedLink, link: "teachers" }} />}
          />
          <Route
            exact
            path="parents"
            element={<Parents {...{ setSelectedLink, link: "parents" }} />}
          />
          <Route
            exact
            path="staffs"
            element={<Staffs {...{ setSelectedLink, link: "staffs" }} />}
          />
          <Route
            exact
            path="class"
            element={<Class {...{ setSelectedLink, link: "class" }} />}
          />
          <Route
            exact
            path="calendar"
            element={<Calendar {...{ setSelectedLink, link: "calendar" }} />}
          />
          <Route
            exact
            path="notice"
            element={<NoticeBoard {...{ setSelectedLink, link: "notice" }} />}
          />
          <Route
            exact
            path="addstudent"
            element={
              <AddStudent {...{ setSelectedLink, link: "addstudent" }} />
            }
          />
          <Route
            exact
            path="addparent"
            element={<AddParent {...{ setSelectedLink, link: "addparent" }} />}
          />
          <Route
            exact
            path="addteacher"
            element={
              <AddTeacher {...{ setSelectedLink, link: "addteacher" }} />
            }
          />
          <Route
            exact
            path="addstaff"
            element={<AddStaff {...{ setSelectedLink, link: "addstaff" }} />}
          />
          <Route
            exact
            path="subjects"
            element={<Subject {...{ setSelectedLink, link: "subjects" }} />}
          />
          <Route
            exact
            path="fees"
            element={<ManageFees {...{ setSelectedLink, link: "fees" }} />}
          />
          <Route
            exact
            path="managemarks"
            element={
              <ManageMarks {...{ setSelectedLink, link: "managemarks" }} />
            }
          />
          <Route
            exact
            path="exams"
            element={<ExamList {...{ setSelectedLink, link: "exams" }} />}
          />
        </Routes>
      </Box>
    </>
  );
};

export default MySidebar;
