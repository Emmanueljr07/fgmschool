import { Box, useTheme, Paper, Typography } from "@mui/material";
import Header from "../../Components/Header";
import { tokens } from "../../theme";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import ClassIcon from "@mui/icons-material/Class";
import SubjectIcon from "@mui/icons-material/Subject";
import StatBox from "../../Components/StatBox";
import { Quiz } from "@mui/icons-material";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
        <Paper
          elevation={3}
          sx={{ p: 3, gridColumn: "span 2" }}
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h4">Total Users</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SubjectIcon
              sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }}
            />
            <Typography variant="h4">10</Typography>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, gridColumn: "span 2" }}>
          <Typography variant="h4">Total Students</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SchoolIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
            <Typography variant="h4">200</Typography>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, gridColumn: "span 2" }}>
          <Typography variant="h4">Total Teachers</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <GroupIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
            <Typography variant="h4">40</Typography>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, gridColumn: "span 2" }}>
          <Typography variant="h4">Total Subjects</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SubjectIcon
              sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }}
            />
            <Typography variant="h4">60</Typography>
          </Box>
        </Paper>
        <Paper elevation={3} sx={{ p: 3, gridColumn: "span 2" }}>
          <Typography variant="h4">Total Class</Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ClassIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
            <Typography variant="h4">6</Typography>
          </Box>
        </Paper>
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
