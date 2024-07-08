import { Logout, Settings } from "@mui/icons-material";
import { ListItemIcon, Menu, MenuItem } from "@mui/material";
import React from "react";
import { useValue } from "../../context/ContextProvider";

const UserMenu = ({ anchorUserMenu, setAnchorUserMenu }) => {
  const { dispatch } = useValue();

  const handleCloseUserMenu = () => {
    setAnchorUserMenu(null);
  };
  return (
    <Menu
      anchorEl={anchorUserMenu}
      open={Boolean(anchorUserMenu)}
      onClose={handleCloseUserMenu}
      onclick={handleCloseUserMenu}
    >
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Profile
      </MenuItem>
      <MenuItem
        onclick={() => dispatch({ type: "UPDATE_USER", payload: null })}
      >
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
