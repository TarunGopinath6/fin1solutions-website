import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

import { useNavigate } from "react-router-dom";

import Logo from "../assets/images/logo_fin1solutions.png";

const pages = [
  "Home",
  "Motor Insurance",
  "Health Insurance",
  "General Insurance",
  "Vehicle Loans",
  "About",
  "Contact",
];

export default function ResponsiveAppBar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  // Fixed the error by handling the close case separately
  const handleCloseNavMenu = (page) => {
    setAnchorElNav(null);
    if (typeof page === "string") {
      // Only navigate if a page is clicked
      const path =
        page === "Home" ? "/" : `/${page.replace(" ", "").toLowerCase()}`;
      navigate(path);
    }
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ background: "white", boxShadow: 0 }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{
              flex: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            {/* Desktop Logo */}
            <Box
              component="img"
              sx={{
                display: { xs: "none", md: "flex" }, // Hide on mobile
                maxHeight: { md: 40 },
                height: "auto",
                width: { md: 170 },
                paddingTop: 1.5,
              }}
              src={Logo}
            />
            {/* Desktop Menu */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "flex-end",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{ my: 1, mx: 1, color: "#3b3b3b", display: "block" }}
                >
                  {/* {capitalizeFirstLetter(page)} */}
                  <Typography textAlign="center" fontSize={14}>
                    {capitalizeFirstLetter(page)}
                  </Typography>
                </Button>
              ))}
              <Button
                variant="contained"
                sx={{
                  my: 2,
                  mx: 2,
                  color: "#fff",
                  display: "block",
                  borderColor: "#f03d1f",
                  backgroundColor: "#f03d1f",
                }}
                onClick={() => window.open("tel:+919841061758")}
              >
                Call: +91 98410 61758
              </Button>
            </Box>
          </Box>

          {/* Mobile Menu and Layout */}

          <Box
            sx={{
              flex: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
              position: "relative",
              my: 1,
            }}
          >
            <Box
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                my: 1,
              }}
            >
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Centered Mobile Logo */}
            <Box
              component="img"
              sx={{
                position: "absolute", // Absolute positioning to center it
                left: "50%", // Start positioning from the center
                transform: "translateX(-50%)", // Offset to fully center horizontally
                display: { xs: "flex", md: "none" }, // Hide on mobile
                maxHeight: { xs: 50 },
                height: "auto",
                width: { xs: 200 },
                paddingTop: 0.5,
              }}
              src={Logo}
            />

            {/* Mobile Menu */}
            <Menu
              position="relative"
              marginThreshold={0}
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={() => handleCloseNavMenu()} // No parameter when just closing
              sx={{
                display: { xs: "block", md: "none" },
              }}
              slotProps={{
                paper: {
                  sx: {
                    width: "100%",
                    maxWidth: "100%",
                    left: "3px",
                    right: "3px",
                    my: 0.5,
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => handleCloseNavMenu(page)}
                  sx={{
                    width: "100%", // Make the MenuItem span the full width
                    textAlign: "center", // Center the text
                    my: 1, // Add some margin between items
                  }}
                >
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
