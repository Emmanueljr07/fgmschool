import { Group, People, Subject } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";

const Main = ({ setSelectedLink, link }) => {
  useEffect(() => {
    setSelectedLink(link);
  });
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "grid" },
        gridTemplateColumns: "repeat(3, 1fr)",
        gridAutoRows: "minmax(100px, auto)",
        gap: 3,
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Subjects</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Subject sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">10</Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Students</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <People sx={{ height: 100, width: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">20</Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Main;
