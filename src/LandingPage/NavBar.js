import { Lock, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <AppBar>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ mr: 1 }}>
            <IconButton size="large" color="inherit">
              <Menu />
            </IconButton>
          </Box>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            School Management System
          </Typography>
          <Typography
            variant="h6"
            component="h1"
            noWrap
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            FGM
          </Typography>
          <Button color="inherit" startIcon={<Lock />} onClick={handleClick}>
            LOGIN
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default NavBar;
