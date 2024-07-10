import { Logout, Settings } from "@mui/icons-material";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useValue } from "../../context/ContextProvider";

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
  const { dispatch } = useValue();

  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };

  const handleLogout = () => {
    // dispatch({ type: "UPDATE_USER", payload: null });
    dispatch({
      type: "UPDATE_ALERT",
      payload: { open: true, severity: "error", message: "Logged out!" },
    });
    handleCloseUserMenu();
  };

  return (
    <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={handleCloseUserMenu}
      onClick={handleCloseUserMenu}
    >
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
