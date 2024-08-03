import { Box } from "@mui/material";
// import { useTheme, Paper, Typography } from "@mui/material";
import Header from "../../Components/Header";
// import { tokens } from "../../theme";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import ClassIcon from "@mui/icons-material/Class";
import SubjectIcon from "@mui/icons-material/Subject";
import StatBox from "../../Components/StatBox";
import { Quiz } from "@mui/icons-material";
import GroupsIcon from "@mui/icons-material/Groups";
import { useEffect } from "react";
// import { useValue } from "../../context/ContextProvider";
// import { getUsers } from "../../actions/user";

const Dashboard = ({ setSelectedLink, link }) => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const {
  //   state: { currentUser, users },
  //   dispatch,
  // } = useValue();

  useEffect(() => {
    setSelectedLink(link);
    // console.log(users.length);
    // if (users.length === 0) getUsers(dispatch, currentUser);
  });

  return (
    <Box m="20px" width="100%">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID AND CHARTS */}

      <Box
        sx={{
          display: { xs: "flex", md: "grid" },
          flexDirection: "column",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "minmax(100px, auto)",
          gap: 2,
        }}
      >
        <StatBox
          title="Total Users"
          icon={
            <GroupsIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          }
          amount={6}
          // amount={users.length}
        />
        <StatBox
          title="Total Students"
          icon={
            <SchoolIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          }
          amount={200}
        />
        <StatBox
          title="Total Teachers"
          icon={
            <GroupIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          }
          amount={40}
        />
        <StatBox
          title="Total Subjects"
          icon={
            <SubjectIcon
              sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }}
            />
          }
          amount={60}
        />
        <StatBox
          title="Total Class"
          icon={
            <ClassIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          }
          amount={6}
        />

        <StatBox
          title="Total Exams"
          icon={
            <Quiz sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} sid />
          }
          amount="6"
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
