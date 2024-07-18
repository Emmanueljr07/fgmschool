import { useState } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
  menuClasses,
} from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
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
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SubjectIcon from "@mui/icons-material/Subject";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import TokenIcon from "@mui/icons-material/Token";
import QuizIcon from "@mui/icons-material/Quiz";
import GradeIcon from "@mui/icons-material/Grade";
import PaymentsIcon from "@mui/icons-material/Payments";

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

const MySidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  return (
    <Box
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
      <Sidebar collapsed={isCollapsed} transitionDuration={800}>
        <Menu iconShape="square">
          {/* {LOGO AND MENU ICON} */}

          <Box
            display="flex"
            justifyContent="end"
            alignItems="center"
            mt="15px"
            mr="20px"
            mb="15px"
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>
          <Box
            display="flex"
            justifyContent="end"
            alignItems="center"
            mt="15px"
            mr="20px"
            mb="15px"
            sx={{ display: { xs: "flex", md: "none" } }}
          >
            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Box>

          {/* {MENU ITEMS} */}

          {/* {MENU ITEMS} */}
          <Box paddingLeft={isCollapsed ? undefined : "10px"}>
            <Item
              title="Dashboard"
              to="/dashboard"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <SubMenu label="Students" icon={<SchoolIcon />}>
              <Item
                title="All Students"
                to="/students"
                icon={<ContactsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Admission Form"
                to="/addstudent"
                icon={<PersonAddIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu label="Teachers" icon={<GroupIcon />}>
              <Item
                title="All Teachers"
                to="/teachers"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Add Teacher"
                to="/addteacher"
                icon={<PersonAddIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu label="Class" icon={<Diversity2Icon />}>
              <Item
                title="Manage Classes"
                to="/class"
                icon={<ReceiptOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>
            <SubMenu label="Subject" icon={<LibraryBooksIcon />}>
              <Item
                title="Manage Subjects"
                to="/subjects"
                icon={<SubjectIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <SubMenu label="Exam Section" icon={<TokenIcon />}>
              <Item
                title="Exam Lists "
                to="/exams"
                icon={<QuizIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              {/* <Item
                title="Exam Grades"
                to="/grades"
                icon={<GradingIcon />}
                selected={selected}
                setSelected={setSelected}
              /> */}
              <Item
                title="Manage Marks"
                to="/managemarks"
                icon={<GradeIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </SubMenu>

            <Item
              title="Payment and Invoice"
              to="/fees"
              icon={<PaymentsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Notice"
              to="/notice"
              icon={<HelpOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MySidebar;
