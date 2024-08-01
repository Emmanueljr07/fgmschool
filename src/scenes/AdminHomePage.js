import { ColorModeContext, useMode } from "../theme";
// import { tokens } from "../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// import { Home } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useEffect, useState } from "react";
// import { useContext,} from "react";
import { useValue } from "../context/ContextProvider";
import UserMenu from "../Components/user/UserMenu";
import MySidebar from "./global/Sidebar";
import { Home } from "@mui/icons-material";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AdminHomePage = () => {
  const navigate = useNavigate();
  const [theme, colorMode] = useMode();

  // const colors = tokens(theme.palette.mode);
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const {
    state: { currentUser },
  } = useValue();

  useEffect(() => {
    if (
      !currentUser?.role === "admin" ||
      !currentUser?.role === "editor" ||
      !currentUser?.role === "viewer"
    ) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const [anchorUserMenu, setAnchorUserMenu] = useState(null);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="fixed" color="default1" enableColorOnDark>
          <Toolbar sx={{ ml: 1 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuOutlinedIcon />
            </IconButton>
            <Box display="flex" sx={{ ml: 6, flexGrow: 1 }}>
              <Tooltip title="return to dashboard">
                <IconButton onClick={() => navigate("/")}>
                  <Home />
                </IconButton>
              </Tooltip>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ ml: 2, alignContent: "center" }}
              >
                Dashboard
              </Typography>
            </Box>
            <Box display="flex">
              <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                  <DarkModeOutlinedIcon />
                ) : (
                  <LightModeOutlinedIcon />
                )}
              </IconButton>
              <IconButton>
                <NotificationsOutlinedIcon />
              </IconButton>
              <IconButton>
                <SettingsOutlinedIcon />
              </IconButton>
              <Tooltip title="Open User Settings">
                <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
                  <PersonOutlinedIcon />
                </IconButton>
              </Tooltip>
              <UserMenu {...{ anchorUserMenu, setAnchorUserMenu }} />
            </Box>
          </Toolbar>
        </AppBar>
        <Box mt={6}>
          <MySidebar {...{ open, setOpen }} />
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default AdminHomePage;
