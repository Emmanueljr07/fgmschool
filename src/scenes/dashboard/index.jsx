import { Box, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../Components/Header";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import SchoolIcon from "@mui/icons-material/School";
import GroupIcon from "@mui/icons-material/Group";
import ClassIcon from "@mui/icons-material/Class";
import LineChart from "../../Components/LineChart";
import BarChart from "../../Components/BarChart";
import StatBox from "../../Components/StatBox";
import CalendarView from "../../Components/CalendarView";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
      </Box>

      {/* GRID AND CHARTS */}
      <Box display="grid" gridTemplateColumns="repeat(3, 1fr)" gap="10px">
        <Box
          gridColumn="span 2"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gridAutoRows="110px"
          gap="15px"
        >
          {/* ROW 1 */}
          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="15px"
          >
            <StatBox
              title="Students"
              amount="400"
              icon={
                <SchoolIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                />
              }
            />
          </Box>

          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="15px"
          >
            <StatBox
              title="Teachers"
              amount="61"
              icon={
                <GroupIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                />
              }
            />
          </Box>

          <Box
            gridColumn="span 4"
            backgroundColor={colors.primary[400]}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="15px"
          >
            <StatBox
              title="Staffs"
              amount="130"
              icon={
                <ClassIcon
                  sx={{ color: colors.greenAccent[600], fontSize: "30px" }}
                />
              }
            />
          </Box>

          {/* ROW 2 */}
          <Box
            gridColumn="span 12"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            borderRadius="15px"
          >
            <Box
              mt="25px"
              p="0 30px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography
                  variant="h5"
                  fontWeight="600"
                  color={colors.grey[100]}
                >
                  Revenue Generated
                </Typography>
              </Box>
              <Box>
                <IconButton>
                  <DownloadOutlinedIcon
                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                  />
                </IconButton>
              </Box>
            </Box>

            <Box height="230px" mt="-40px">
              <LineChart isDashboard={true} />
            </Box>
          </Box>

          {/* ROW 3 */}

          <Box
            gridColumn="span 12"
            gridRow="span 2"
            backgroundColor={colors.primary[400]}
            borderRadius="15px"
          >
            <Typography
              variant="h5"
              fontWeight="600"
              sx={{ p: "10px 20px 0 30px" }}
            >
              Sales Quantity
            </Typography>
            <Box height="250px" mt="-20px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>

          {/*  */}
        </Box>
        <Box gridColumn="span 1" gridRow="span 2">
          <CalendarView />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
