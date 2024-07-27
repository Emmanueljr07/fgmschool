import { ArrowForward } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const LandingContent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/teacherlogin");
  };
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
      <Box sx={{ bottom: 50, position: "absolute", right: 30 }}>
        <Button
          sx={{
            backgroundColor: "blue",
            color: "white",
            fontSize: "14px",
            padding: "10px 20px",
            borderRadius: 10,
          }}
          onClick={handleClick}
        >
          Login as a Teacher
          <ArrowForward sx={{ ml: 1 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default LandingContent;
