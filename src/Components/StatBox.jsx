import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ title, icon, amount }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width="100%" m="0 30px">
      <Box>
        <Box>{icon}</Box>
      </Box>

      <Box display="flex" justifyContent="space-between" mt="15px">
        <Typography variant="h4" sx={{ color: colors.grey[100] }}>
          {title}
        </Typography>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: colors.grey[600] }}
        >
          {amount}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
