import { Box, Typography, useTheme, Paper } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, icon, amount }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Paper elevation={3} sx={{ p: 3, gridColumn: "span 2" }}>
      <Typography variant="h4">{title}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
        {/* <GroupIcon sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} /> */}
        <Typography variant="h4">{amount}</Typography>
      </Box>
    </Paper>
  );
};

export default StatBox;

// <Box width="100%" m="0 30px">
// <Box>
//   <Box>{icon}</Box>
// </Box>

// <Box display="flex" justifyContent="space-between" mt="15px">
//   <Typography variant="h4" sx={{ color: colors.grey[100] }}>
//     {title}
//   </Typography>
//   <Typography
//     variant="h4"
//     fontWeight="bold"
//     sx={{ color: colors.grey[600] }}
//   >
//     {amount}
//   </Typography>
// </Box>
// </Box>
