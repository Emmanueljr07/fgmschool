import { Logout, Settings } from "@mui/icons-material";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useValue } from "../../context/ContextProvider";
import Profile from "./Profile";
import { logout } from "../../actions/user";

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
  const { dispatch } = useValue();

  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };

  const handleLogout = () => {
    logout(dispatch);
    handleCloseUserMenu();
  };

  return (
    <>
      <Profile />
      <Menu
        anchorEl={anchorUserMenu}
        open={Boolean(anchorUserMenu)}
        onClose={handleCloseUserMenu}
        onClick={handleCloseUserMenu}
      >
        <MenuItem
          onClick={() =>
            dispatch({
              type: "UPDATE_PROFILE",
              payload: {
                open: true,
              },
            })
          }
        >
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
    </>
  );
};

export default UserMenu;
