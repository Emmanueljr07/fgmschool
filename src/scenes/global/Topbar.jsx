// import { Box, IconButton, useTheme, Tooltip, Typography } from "@mui/material";
// import { useContext, useState } from "react";
// import { styled } from "@mui/material/styles";
// import { ColorModeContext, tokens } from "../../theme";
// import InputBase from "@mui/material/InputBase";
// import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
// import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import SearchIcon from "@mui/icons-material/Search";
// import { useValue } from "../../context/ContextProvider";
// import UserMenu from "../../Components/user/UserMenu";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import { Home } from "@mui/icons-material";

// const drawerWidth = 240;

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme, open }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   ...(open && {
//     marginLeft: drawerWidth,
//     width: `calc(100% - ${drawerWidth}px)`,
//     transition: theme.transitions.create(["width", "margin"], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   }),
// }));

// const Topbar = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const colorMode = useContext(ColorModeContext);
//   const [isCollapsed, setIsCollapsed] = useState(true);
//   const [open, setOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//     setIsCollapsed(!isCollapsed);
//   };

//   const {
//     state: { currentUser },
//   } = useValue();

//   const [anchorUserMenu, setAnchorUserMenu] = useState(null);

//   return (
//     <Box
//       display="flex"
//       justifyContent="space-between"
//       alignItems="center"
//       m={3}
//       backgroundColor={colors.primary[400]}
//     >
//       <AppBar position="fixed" open={open}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             sx={{
//               marginRight: 5,
//               ...(open && { display: "none" }),
//             }}
//           >
//             <MenuOutlinedIcon />
//           </IconButton>
//           <Tooltip>
//             <IconButton sx={{ mr: 1 }}>
//               <Home />
//             </IconButton>
//           </Tooltip>
//           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
//             Dashboard
//           </Typography>
//           <Box display="flex">
//             <IconButton onClick={colorMode.toggleColorMode}>
//               {theme.palette.mode === "dark" ? (
//                 <DarkModeOutlinedIcon />
//               ) : (
//                 <LightModeOutlinedIcon />
//               )}
//             </IconButton>
//             <IconButton>
//               <NotificationsOutlinedIcon />
//             </IconButton>
//             <IconButton>
//               <SettingsOutlinedIcon />
//             </IconButton>
//             <Tooltip title="Open User Settings">
//               <IconButton onClick={(e) => setAnchorUserMenu(e.currentTarget)}>
//                 <PersonOutlinedIcon />
//               </IconButton>
//             </Tooltip>
//             <UserMenu {...{ anchorUserMenu, setAnchorUserMenu }} />
//           </Box>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// };

// export default Topbar;
