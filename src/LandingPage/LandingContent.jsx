import { Box, Typography } from "@mui/material";
import React from "react";

const LandingContent = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        backgroundColor: "lightblue",
      }}
    >
      <Typography
        variant="h3"
        fontWeight="500"
        sx={{ mb: "5px" }}
        color="whitesmoke"
      >
        Welcome to the School Management System
      </Typography>
    </Box>
  );
};

export default LandingContent;
