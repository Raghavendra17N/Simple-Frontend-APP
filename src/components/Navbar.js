import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "background.paper", color: "text.primary" }}>
      <Toolbar>
        {/* Home Icon */}
        <IconButton edge="start" color="inherit" aria-label="home" sx={{ mr: 2 }}>
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <HomeIcon />
          </Link>
        </IconButton>

        {/* Title */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Tax Calculation Made Easy
        </Typography>

        {/* User Icon */}
        <IconButton edge="end" color="inherit" onClick={handleMenuOpen}>
          <AccountCircleIcon />
        </IconButton>

        {/* Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleMenuClose}>
            <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
              Login
            </Link>
          </MenuItem>
          <MenuItem onClick={handleMenuClose}>
            <Link to="/register" style={{ textDecoration: "none", color: "inherit" }}>
              Register
            </Link>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
